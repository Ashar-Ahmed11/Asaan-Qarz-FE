import React from 'react'
import AppContext from './appContext'
import { useEffect, useState, useRef } from 'react'
import useLocalStorage from '../hooks/uselocalstorage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const AppState = (props) => {

  const history = useHistory()
  const inputRef = useRef(null)
  const [createUserLoader, setCreateUserLoader] = useState(false)
  
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    jobTitle:"",
    email: "",
    phoneNumber: "",
    cnic: "",
    address: "",
    loanStatus: "Pending", // default
    loanAmount: "",
    bankAccountNumber: "",
    bankName: "",
    paymentScreenshot: "", // will be filled after upload
    frontCnic: "", // will be filled after upload
    backCnic: "", // will be filled after upload
    utilityBill: "", // will be filled after upload
  });



  const subject = "Subject: Loan Request Successfully Sent";
  const text = `
<div style='background-color:#ffffff;padding:30px; text-align:center;'>
  <img src='https://akhuwatloan.pk/wp-content/uploads/2025/01/Logo-EN-white-201x300-1.png' style='max-width:200px; display:block; margin:0 auto;' />
  <h1 style='color:#108515;text-align:center;'>${userData.firstName}, Thanks For requesting a loan request</h1>
  <h3 style='padding:5px;color:black'>Our team will shortly get back to you</h3>
</div>
`;

  const world = "helloworldhowareyou"
  useEffect(() => {
    console.log("paymentScreenshot updated:", userData.paymentScreenshot);
  }, [userData.paymentScreenshot]);

  const [adminToken, setAdminToken] = useLocalStorage('adminToken', null)
  const [loadingNumber, setloadingNumber] = useState(false); 
  const [admin, setAdmin] = useState(false)
  const [imgUrl, setImgUrl] = useState("")



  const handleFileUpdate = async (event, fieldName) => {
  const file = event.target.files[0];
  if (!file || !fieldName) return;

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "Screen_shot");
  data.append("cloud_name", "dmss0by2k");

  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/dmss0by2k/image/upload", {
      method: 'POST',
      body: data,
    });

    const uploadImgUrl = await res.json();

    setUserData((prev) => ({
      ...prev,
      [fieldName]: uploadImgUrl.url,
    }));

    console.log(`${fieldName}: ${uploadImgUrl.url}`);
  } catch (error) {
    console.error("Upload error:", error);
  }
};
  console.log(imgUrl)

  // https://akhuwatasaanbe.vercel.app


const mailSend = async (to) => {
  try {
    const res = await fetch("https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/user/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        to,
        subject: subject, 
        text: text        
      }),
    });

    const data = await res.json();
    if (res.ok) {
      console.log("Email sent:", data.message || data);
    } else {
      console.error("Email failed:", data.error || data);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};








  const signIn = async (username, password) => {

    // settheProductLoader(true)


    const url = "https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/auth/login"
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Accept": "*",
      },

      body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    if (username == "asaanqarzvipadmin@asaanqarz.com") {
      setAdminToken(data.authtoken)
      history.push('/admin-dashboard')
      setAdmin(true)
    }
    console.log(data);



    // console.log(data.map((e)=>{return e.id}))
  }


  console.log(adminToken);


  const [siteData, setSiteData] = useState(null)

  const getAppData = async () => {
    try {
    
    setloadingNumber(true);
    const responseThree = await fetch("https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/number/all-numbers", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Accept": "*",
      },

      // body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
    });

    const siteData = await responseThree.json(); // parses JSON response into native JavaScript objects
    setSiteData({ id: siteData.id, loanfee: siteData.loanfee, phone: siteData.phone, description: siteData.description, easypaisa: siteData.easypaisa, jazzcash: siteData.jazzcash })
} finally {
    setloadingNumber(false); // 👈 END LOADING
  }
    // setCoverImages(data.assets)
    // console.log(data.assets);
    console.log(siteData);


  }

  // dynamic editable content: Home page
  const [homeContent, setHomeContent] = useState(null)
  const [homeLoaded, setHomeLoaded] = useState(false)

  const getHomeData = async () => {
    try {
      const res = await fetch("https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/home/gethome", {
        method: "GET",
        headers: { "Content-Type": "application/json", "Accept": "*" },
      });
      const data = await res.json();
      setHomeContent(data?.fields || {});
    } catch (e) {
      console.error("getHomeData error:", e);
    } finally {
      setHomeLoaded(true);
    }
  };

  const updateHomeData = async (fieldsUpdate) => {
    try {
      const res = await fetch("https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/home/edithome", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*",
          "auth-token": adminToken
        },
        body: JSON.stringify({ fields: fieldsUpdate })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to update content");
      setHomeContent(data?.fields || {});
      return true;
    } catch (e) {
      console.error("updateHomeData error:", e);
      return false;
    }
  };

  // Generic per-page content storage
  const [contentByPage, setContentByPage] = useState({})
  const [contentLoadedByPage, setContentLoadedByPage] = useState({})

  const getPageContent = async (slug) => {
    try {
      const res = await fetch(`https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/content/${slug}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Accept": "*" },
      });
      const data = await res.json();
      setContentByPage((prev)=> ({ ...prev, [slug]: data?.fields || {} }));
      setContentLoadedByPage((prev)=> ({ ...prev, [slug]: true }));
      return data?.fields || {};
    } catch (e) {
      console.error("getPageContent error:", e);
      setContentLoadedByPage((prev)=> ({ ...prev, [slug]: true }));
      return {};
    }
  };

  const updatePageContent = async (slug, fieldsUpdate) => {
    try {
      const res = await fetch(`https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/content/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*",
          "auth-token": adminToken
        },
        body: JSON.stringify({ fields: fieldsUpdate })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to update content");
      setContentByPage((prev)=> ({ ...prev, [slug]: data?.fields || {} }));
      setContentLoadedByPage((prev)=> ({ ...prev, [slug]: true }));
      return true;
    } catch (e) {
      console.error("updatePageContent error:", e);
      return false;
    }
  };

  const ensurePageContent = async (slug) => {
    if (contentByPage[slug]) return contentByPage[slug];
    return await getPageContent(slug);
  };

  const isPageContentLoaded = (slug) => !!contentLoadedByPage[slug];

  // Posts (blog-like)
  const [posts, setPosts] = useState([])
  const [postsLoaded, setPostsLoaded] = useState(false)
  const [postsLoading, setPostsLoading] = useState(false)
  const API_BASE = 'https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/'
  const [postById, setPostById] = useState({})

  const fetchPosts = async () => {
    try {
      setPostsLoading(true)
      const res = await fetch(`${API_BASE}/api/posts`, { headers: { Accept: '*' } })
      const data = await res.json()
      setPosts(Array.isArray(data) ? data : [])
    } catch (e) {
      console.error('fetchPosts error:', e)
    } finally {
      setPostsLoading(false); setPostsLoaded(true)
    }
  }

  const createPostItem = async (title, description) => {
    const res = await fetch(`${API_BASE}/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'auth-token': adminToken },
      body: JSON.stringify({ title, description })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data?.error || 'Failed to create post')
    setPosts((p)=> [data, ...p])
    return data
  }

  const fetchPostById = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/posts/${id}`, { headers: { Accept: '*' } })
      const data = await res.json()
      if (data && data._id) {
        setPostById(prev => ({ ...prev, [id]: data }))
        return data
      }
      return null
    } catch (e) {
      console.error('fetchPostById error:', e)
      return null
    }
  }

  const updatePostItem = async (id, title, description) => {
    const res = await fetch(`${API_BASE}/api/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'auth-token': adminToken },
      body: JSON.stringify({ title, description })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data?.error || 'Failed to update post')
    setPosts((p)=> p.map(x=> x._id===id? data : x))
    return data
  }

  const deletePostItem = async (id) => {
    const res = await fetch(`${API_BASE}/api/posts/${id}`, {
      method: 'DELETE',
      headers: { 'auth-token': adminToken }
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data?.error || 'Failed to delete post')
    setPosts((p)=> p.filter(x=> x._id!==id))
    return true
  }

  const [editLoader, setEditLoader] = useState(false)

  const editSiteInfo = async () => {
    setEditLoader(true)
    const { loanfee, description, phone, easypaisa, jazzcash } = siteData
    const responseThree = await fetch(`https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/number/edit-number`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Accept": "*",
        "auth-token": adminToken
      },

      body: JSON.stringify({ loanfee, phone, description, easypaisa, jazzcash }), // body data type must match "Content-Type" header
    });
    const resData = await responseThree.json(); // parses JSON response into native JavaScript objects
    setSiteData({ id: siteData.id, loanfee: siteData.loanfee, phone: siteData.phone, description: siteData.description, easypaisa: siteData.easypaisa, jazzcash: siteData.jazzcash })
    setEditLoader(false)

  }

  const loanStatusUpdation = async () => {

    const { loanStatus } = siteData;
    const token = adminToken
    const response = await fetch(`https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/user/update-loan-status/${siteData.id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Accept": "*",
        "auth-token": token
      },

      body: JSON.stringify({ loanStatus }), // body data type must match "Content-Type" header
    });
    const resData = await response.json(); // parses JSON response into native JavaScript objects
    setSiteData({
      ...siteData,
      loanStatus: resData.loanStatus
    });
  }



  console.log(userData)

  const createUser = async () => {
    const payload = {
      ...userData,

    };
    setCreateUserLoader(true)
    try {
      const res = await fetch("https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      setCreateUserLoader(false)
      if (!res.ok) {
        throw new Error(result.error || "Failed to create user");
      }
      await mailSend(payload.email)
      console.log("User created:", result.user);
      alert("Loan request applied successfully!");
      setUserData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        email: "",
        phoneNumber: "",
        cnic: "",
        address: "",
        loanStatus: "Pending", // default
        loanAmount: "",
        bankName: "",
        bankAccountNumber: "",
        paymentScreenshot: "", // will be filled after upload
         frontCnic: "",
  backCnic: "",
  utilityBill: ""
      })
      setImgUrl("")
      inputRef.current.value = ""

    } catch (err) {
      console.error("Error:", err.message);

      alert(`Error: ${err.message}`);
    }
  };

  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const res = await fetch('https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/user/get-users',
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            "Accept": "*",
            "auth-token": adminToken
          },
        }); // Update your route
      const data = await res.json();
      console.log(data)

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch users');
      }

      setUsers(data); // Assuming the response is an array of users

    } catch (err) {
      console.error('Error fetching users:', err.message);

    }
  };


  const fetchUserByCnic = async (cnic) => {
    try {
      const response = await fetch(`https://akhuwat-foundationalcms-dot-arched-gear-433017-u9.de.r.appspot.com/api/user/user-by-cnic/${cnic}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch user by CNIC:", error);
      return null;
    }
  };

  useEffect(() => {
    getAppData()
    getHomeData()
  }, [])




  // 


    console.clear()
  return (
    <AppContext.Provider value={{loadingNumber, createUserLoader, siteData, inputRef, fetchUserByCnic, users, fetchUsers, userData, setUserData, siteData, createUser, signIn, adminToken, admin, setAdminToken, editSiteInfo, setSiteData, editLoader, setEditLoader, loanStatusUpdation, handleFileUpdate, homeContent, homeLoaded, getHomeData, updateHomeData, contentByPage, contentLoadedByPage, getPageContent, updatePageContent, ensurePageContent, isPageContentLoaded, posts, postsLoaded, postsLoading, fetchPosts, fetchPostById, postById, createPostItem, updatePostItem, deletePostItem, logoutAdmin: ()=>{ setAdminToken(null); setAdmin(false) } }}>
      {props.children}
    </AppContext.Provider>
  )
}


export default AppState