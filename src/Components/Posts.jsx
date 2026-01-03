import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from './context/appContext';
import JoditEditor from 'jodit-react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Posts = () => {
  const { adminToken, posts, postsLoaded, postsLoading, fetchPosts, createPostItem, updatePostItem, deletePostItem } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [saving, setSaving] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editSaving, setEditSaving] = useState(false);
  const [deletePost, setDeletePost] = useState(null);
  const editModalRef = useRef(null);
  const deleteModalRef = useRef(null);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => { if (!postsLoaded) fetchPosts(); }, [postsLoaded, fetchPosts]);
  const history = useHistory();


  

  const openEdit = (p) => {
    setEditPost({ ...p });
    setEditTitle(p.title || '');
    setEditDesc(p.description || '');
    setShowEdit(true);
  };
  const openDelete = (p) => {
    setDeletePost(p);
    const el = document.getElementById('deletePostModal');
    if (el && window.bootstrap) new window.bootstrap.Modal(el).show();
  };

  const fmt = (iso) => {
    const d = new Date(iso);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yy = String(d.getFullYear()).slice(-2);
    let h = d.getHours();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12; if (h === 0) h = 12;
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${dd}/${mm}/${yy} ${h}:${min} ${ampm}`;
  };

  const onCreate = async (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    try { setSaving(true); await createPostItem(title, desc); setTitle(''); setDesc(''); }
    finally { setSaving(false); }
  };
  const onSaveEdit = async () => {
    try {
      setEditSaving(true);
      await updatePostItem(editPost._id, editTitle, editDesc);
      setShowEdit(false);
    } finally {
      setEditSaving(false);
    }
  };
  const onConfirmDelete = async () => {
    if (!deletePost) return;
    await deletePostItem(deletePost._id);
  };

  
  return (
    <div className="container py-4" style={{ maxWidth: 900 }}>
      <h2 className="mb-3 fw-bold">Posts</h2>
      {adminToken && (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="mb-3">Create Post</h5>
            <form onSubmit={onCreate}>
              <input className="form-control mb-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
              <div className="mb-2">
                <JoditEditor
                  value={desc}
                 
                  onBlur={(v)=>setDesc(v)}
                />
              </div>
              <button className="btn btn-primary" disabled={saving}>{saving? 'Posting...' : 'Post'}</button>
            </form>
          </div>
        </div>
      )}

      {(postsLoading && !postsLoaded) ? <div className="text-center py-5">Loading posts...</div> : null}

      <div className="d-flex flex-column gap-3">
        {posts.map(p=>(
          <div key={p._id} className="card shadow-sm" role="button" onClick={()=>history.push(`/posts/${p._id}`)}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-1">{p.title}</h5>
                <small className="text-muted">{fmt(p.date)}</small>
              </div>
              <div className="mt-2" dangerouslySetInnerHTML={{ __html: p.description }} />
              {adminToken && (
                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary" onClick={(e)=>{e.stopPropagation(); openEdit(p)}}>Edit</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={(e)=>{e.stopPropagation(); openDelete(p)}}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
        {!posts.length && postsLoaded && <div className="text-center text-muted">No posts yet.</div>}
      </div>

      {showEdit && (
        <div className="custom-modal-overlay" onClick={()=>setShowEdit(false)}>
          <div className="custom-modal" onClick={(e)=>e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center border-bottom p-3">
              <h5 className="m-0">Edit Post</h5>
              <button type="button" className="btn-close" onClick={()=>setShowEdit(false)} aria-label="Close"></button>
            </div>
            <div className="p-3">
              <input className="form-control mb-3" value={editTitle} onChange={e=>setEditTitle(e.target.value)} placeholder="Title" />
              <JoditEditor value={editDesc} onChange={setEditDesc} />
            </div>
            <div className="d-flex justify-content-end gap-2 border-top p-3">
              <button type="button" className="btn btn-light" onClick={()=>setShowEdit(false)}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={onSaveEdit} disabled={editSaving}>{editSaving? 'Saving...' : 'Save'}</button>
            </div>
          </div>
        </div>
      )}

      <div className="modal fade" id="deletePostModal" tabIndex="-1" aria-hidden="true" ref={deleteModalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete "<b>{deletePost?.title}</b>"?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={onConfirmDelete} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;


