import React, { useContext, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import AppContext from '../context/appContext';
import JoditEditor from 'jodit-react';

const Editable = ({ page = 'home', field, defaultHtml = '', className = '' }) => {
  const { adminToken, homeContent, homeLoaded, updateHomeData, contentByPage, contentLoadedByPage, ensurePageContent, updatePageContent } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (page !== 'home' && contentByPage?.[page] === undefined) {
      ensurePageContent(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const html = useMemo(() => {
    if (page === 'home') {
      if (!homeLoaded) return '';
      return homeContent?.[field] ?? defaultHtml;
    }
    if (contentByPage?.[page] === undefined) return '';
    return contentByPage?.[page]?.[field] ?? defaultHtml;
  }, [homeContent, homeLoaded, contentByPage, page, field, defaultHtml]);

  const onOpen = async () => {
    if (!adminToken) return;
    setValue(html || '');
    if (page !== 'home') {
      await ensurePageContent(page);
      const fresh = (contentByPage?.[page]?.[field] ?? defaultHtml);
      setValue(fresh || '');
    }
    setOpen(true);
  };

  const onSave = async () => {
    try {
      setSaving(true);
      let ok = true;
      if (page === 'home') {
        ok = await updateHomeData({ [field]: value });
      } else {
        ok = await updatePageContent(page, { [field]: value });
      }
      if (ok) setOpen(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <span onClick={onOpen} className={className} style={{ cursor: adminToken ? 'pointer' : 'auto' }}
        dangerouslySetInnerHTML={{ __html: html }} />
      {open && ReactDOM.createPortal(
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 3000
          }}
          onMouseDown={() => setOpen(false)}
        >
          <div
            style={{ background: '#fff', width: 'min(900px, 95vw)', maxHeight: '90vh', borderRadius: 8, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div style={{ padding: 12, borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
              Edit Content
            </div>
            <div style={{ padding: 12 }}>
              <JoditEditor value={value} onBlur={setValue} />
            </div>
            <div style={{ padding: 12, borderTop: '1px solid #eee', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button className="btn btn-light" onClick={() => setOpen(false)}>Cancel</button>
              <button className="btn btn-primary d-flex align-items-center gap-2" onClick={onSave} disabled={saving}>
                {saving && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                <span>{saving ? 'Saving...' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Editable;


