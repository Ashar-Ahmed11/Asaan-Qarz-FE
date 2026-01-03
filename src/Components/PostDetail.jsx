import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MetaDecorator from './metaDecorator';
import AppContext from './context/appContext';

const API_BASE = "https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/";

const PostDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { posts, postsLoaded, fetchPostById, postById } = useContext(AppContext);

  useEffect(() => {
    let mounted = true;
    (async () => {
      // try from loaded list
      const fromList = posts?.find?.(p => p._id === id);
      if (fromList) {
        if (mounted) { setPost(fromList); setLoading(false); }
        return;
      }
      // try from cache
      if (postById?.[id]) {
        if (mounted) { setPost(postById[id]); setLoading(false); }
        return;
      }
      // fetch via context
      const fetched = await fetchPostById(id);
      if (mounted) { setPost(fetched); setLoading(false); }
    })();
    return () => { mounted = false; };
  }, [id, posts, postById, fetchPostById]);

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

  if (loading) return <div className="container py-5 text-center">Loading post...</div>;
  if (!post) return <div className="container py-5 text-center text-muted">Post not found.</div>;

  const plain = (post?.description || '').replace(/<[^>]+>/g, '');
  const desc = plain.length > 160 ? `${plain.slice(0, 157)}...` : plain;

  return (
    <>
      <MetaDecorator title={`${post.title} | Akhuwat Foundation`} description={desc} />
      <div className="container py-4" style={{ maxWidth: 900 }}>
        <button className="btn btn-link mb-3 px-0" onClick={() => history.push('/posts')}>← Back to Posts</button>
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="mb-2">{post.title}</h3>
            <small className="text-muted">{fmt(post.date)}</small>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: post.description }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;


