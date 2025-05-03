// import React from 'react'
// import { useState } from 'react'
// import { ImagePlus } from 'lucide-react'
// import { motion } from 'framer-motion'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const Form: React.FC = () => {
//   const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       number: '',
//       estimate: '',
//       description: '',
//       projectTitle: '',
//       upload: null,
//       prefered: '',
//       gigForm: ''
//   })
//   const [errorMsg, setErrorMsg] = useState('')

//   const navigate = useNavigate()
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('email', formData.email);
//     data.append('number', formData.number);
//     data.append('estimate', formData.estimate);
//     data.append('description', formData.description);
//     data.append('projectTitle', formData.projectTitle);
//     data.append('prefered', formData.prefered);
//     data.append('gigForm', formData.gigForm);
  
//     if (formData.upload instanceof File) {
//       data.append('upload', formData.upload);
//     }
  
//     try {
//       const response = await axios.post('https://example.com/api/submit', data, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
  
//       if (response.status === 200) {
//         alert('Form submitted successfully!');
//         navigate('/thank-you');
//       } else {
//         setErrorMsg('Form submission failed!');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setErrorMsg('An unexpected error occurred.');
//     }
//   };

//   return (
//     <div className='mb-36'>
//         <div className='text-center font-semibold text-black mt-7'>
//           <h1 className='text-5xl max-sm:text-2xl max-md:text-3xl'>Tell us about your project</h1>
//           <h2 className='text-5xl max-sm:text-2xl capitalize max-md:text-3xl'>We’ll handle the rest.</h2>
//         </div>
//       <form action="" onSubmit={handleSubmit} className='mx-16 max-md:mx-5'>
//         <div className='flex justify-between items-center gap-4 mt-14 mb-6'>
//           <p className='font-semibold max-sm:font-semibold max-sm:w-[50%] text-2xl max-sm:text-[18px]'>Gig Submission Form</p> 
//           <select 
//             className='border max-sm:w-[50%] rounded-xl py-1 px-2 max-sm:px-1 appearance bg-white border-gray-300 focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep' 
//             name="gigForm"
//             value={formData.gigForm} onChange={(e) => setFormData({...formData, gigForm: e.target.value})}
//             required
//           >
//             <option value="Select a Gig" disabled>Select a Gig</option>
//             <option value="Web Development">Web Development</option>
//             <option value="Web Optimization">Web Optimization</option>
//             <option value="Frontend Development">Frontend Development</option>
//             <option value="Backend Development">Backend Development</option>
//           </select>
//         </div>
        
//         <main className='flex w-[100%] max-sm:flex-col justify-between gap-12 max-sm:gap-5 items-center'>
//           <div className='w-[50%] max-md:w-[100%]'>
//             <label className='text-xl' htmlFor="fullname">Full Name <span className='text-deep'>*</span></label> <br />
//             <input 
//               type="text"
//               name='name'
//               className='w-[100%] bg-lightGray focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep py-4 px-5 rounded-[9px]' 
//               value={formData.name} 
//               onChange={(e) => setFormData({...formData, name: e.target.value})} 
//               required
//             />
//           </div>
//           <div className='w-[50%] max-md:w-[100%]'>
//             <label className='text-xl' htmlFor="email">Email <span className='text-deep'>*</span> </label><br />
//             <input 
//               type="email"
//               name='email'
//               className='w-[100%] bg-lightGray focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep py-4 px-5 rounded-[9px]' 
//               value={formData.email} 
//               onChange={(e) => setFormData({...formData, email: e.target.value})} 
//               required
//             />
//           </div>
//         </main>

//         <main className='flex w-[100%] max-sm:mt-5 max-sm:flex-col justify-between gap-12 max-sm:gap-5 items-center'>
//           <div className='w-[50%] max-md:w-[100%]'>
//             <label className='text-xl' htmlFor="phone_no">Phone Number <span className='text-deep'>*</span> </label><br />
//             <input 
//               type="number"
//               name='number' 
//               className='w-[100%] bg-lightGray focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep py-4 px-5 rounded-[9px]' 
//               value={formData.number} 
//               onChange={(e) => setFormData({...formData, number: e.target.value})} 
//               required
//             />
//           </div>
//           <div className='w-[50%] max-md:w-[100%]'>
//             <label className='text-xl' htmlFor="projectTitle">Project Title <span className='text-deep'>*</span> </label><br />
//             <input 
//               type="projectTitle" 
//               name='projectTitle'
//               className='w-[100%] bg-lightGray focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep py-4 px-5 rounded-[9px]' 
//               value={formData.projectTitle} 
//               onChange={(e) => setFormData({...formData, projectTitle: e.target.value})} 
//               required
//             />
//           </div>
//         </main>

//         <div className='max-sm:mt-5'>
//           <label className='text-xl' htmlFor="description">Project Description <span className='text-deep'>*</span> </label><br />
//           <textarea 
//             value={formData.description} 
//             className='w-[100%] bg-lightGray h-[150px] py-3 px-5 rounded-[9px] resize-none focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep overflow-hidden'
//             name='description'
//             onKeyDown={(e) => e.stopPropagation()}
//             onChange={(e) => setFormData({...formData, description: e.target.value})} 
//             required
//             />
//         </div>

//         <main className='flex w-[100%] max-sm:mt-5 max-sm:flex-col justify-between gap-12 max-sm:gap-5 items-center'>
//           <div className='w-[50%] max-md:w-[100%]'>
//             <label className='text-xl' htmlFor="estimate">Estimated Budget <span className='text-deep'>*</span> </label><br />
//             <input 
//               type="text" 
//               name='estimate'
//               className='w-[100%] bg-lightGray focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep py-4 px-5 rounded-[9px]' 
//               value={formData.estimate} onChange={(e) => setFormData({...formData, estimate: e.target.value})} 
//               required
//             />
//           </div>
//           <div className='w-[50%] max-md:w-[100%]'>
//             <label className='text-xl' htmlFor="prefered">Prefered Timeline <span className='text-deep'>*</span> </label><br />
//             <input 
//               type="text"
//               name='prefered'
//               className='w-[100%] bg-lightGray focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep py-4 px-5 rounded-[9px]' 
//               value={formData.prefered} onChange={(e) => setFormData({...formData, prefered: e.target.value})} 
//               required
//             />
//           </div>
//         </main>

//         <label htmlFor="upload" className="block my-2 text-xl mt-4">File Upload*</label>
//         <div className="w-full relative bg-[#E7D7D1] rounded-[9px]">
          
//           <label 
//             htmlFor="upload"
//             className="absolute inset-0 flex flex-col justify-center text-center items-center cursor-pointer"
//           >
//             <i className="z-10 p-3 rounded-md shadow-md text-center">
//               <ImagePlus size={40} />
//             </i>
//             <p className='font-semibold'>Upload Media Here</p>
//           </label>

//           <input
//             name="upload"
//             type="file"
//             className="w-full max-md:h-[13rem] h-72 border bg-deep rounded-[9px] px-5 py-10 opacity-0 cursor-pointer"
//             accept="image/*,video/*"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 upload: e.target.files?.[0]?.name || '',
//               })
//             }
//             required
//           />
//         </div>

//         <motion.div 
//           className='my-8 text-white font-semibold'
//           whileHover={{ scale: 1.01 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <input type="submit" className='w-[100%] bg-deep py-5 hover:bg-[#75432f] transform transition-all px-5 rounded-[9px] cursor-pointer' value="Submit Gig" />
//         </motion.div>
//         <p className='text-red-500 text-center'>{errorMsg}</p>
//       </form>
//     </div>
//   )
// }

// export default Form



import React, { useRef, useState } from 'react'
import { ImagePlus } from 'lucide-react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Move this inside the Form component

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    estimate: '',
    description: '',
    projectTitle: '',
    prefered: '',
    gigForm: '',
  })
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formPayload = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value)
    })
    if (uploadFile) {
      formPayload.append('upload', uploadFile)
    }

    try {
      const response = await axios.post('https://example.com/api/submit', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        alert('Form submitted successfully!')
        console.log(response.data)
        navigate('/thank-you')
      } else {
        setErrorMsg('Form submission failed!')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrorMsg('There was an error submitting the form.')
    }
  }

  return (
    <div className='mb-36'>
      <div className='text-center font-semibold text-black mt-7'>
        <h1 className='text-5xl max-sm:text-2xl max-md:text-3xl'>Tell us about your project</h1>
        <h2 className='text-5xl max-sm:text-2xl capitalize max-md:text-3xl'>We’ll handle the rest.</h2>
      </div>

      <form onSubmit={handleSubmit} className='mx-16 max-md:mx-5'>
        {/* Gig Form */}
        <div className='flex justify-between items-center gap-4 mt-14 mb-6'>
          <p className='font-semibold text-2xl max-sm:text-[18px]'>Gig Submission Form</p>
          <select
            className='border max-sm:w-[50%] rounded-xl py-1 px-2 bg-white border-gray-300 focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep'
            name="gigForm"
            value={formData.gigForm}
            onChange={(e) => setFormData({ ...formData, gigForm: e.target.value })}
            required
          >
            <option value="" disabled>Select a Gig</option>
            <option value="Web Development">Web Development</option>
            <option value="Web Optimization">Web Optimization</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
          </select>
        </div>

        {/* Name & Email */}
        <main className='flex w-full max-sm:flex-col justify-between gap-12 max-sm:gap-5 items-center'>
          <div className='w-1/2 max-md:w-full'>
            <label className='text-xl'>Full Name <span className='text-deep'>*</span></label><br />
            <input
              type="text"
              name='name'
              className='w-full bg-lightGray py-4 px-5 rounded-[9px] focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className='w-1/2 max-md:w-full'>
            <label className='text-xl'>Email <span className='text-deep'>*</span></label><br />
            <input
              type="email"
              name='email'
              className='w-full bg-lightGray py-4 px-5 rounded-[9px] focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </main>

        {/* Phone & Title */}
        <main className='flex w-full max-sm:mt-5 max-sm:flex-col justify-between gap-12 max-sm:gap-5 items-center'>
          <div className='w-1/2 max-md:w-full'>
            <label className='text-xl'>Phone Number <span className='text-deep'>*</span></label><br />
            <input
              type="tel"
              name='number'
              className='w-full bg-lightGray py-4 px-5 rounded-[9px] focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep'
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              required
            />
          </div>
          <div className='w-1/2 max-md:w-full'>
            <label className='text-xl'>Project Title <span className='text-deep'>*</span></label><br />
            <input
              type="text"
              name='projectTitle'
              className='w-full bg-lightGray py-4 px-5 rounded-[9px] focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep'
              value={formData.projectTitle}
              onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
              required
            />
          </div>
        </main>

        {/* Description */}
        <div className='max-sm:mt-5'>
          <label className='text-xl'>Project Description <span className='text-deep'>*</span></label><br />
          <textarea
            className='w-full h-[150px] bg-lightGray py-3 px-5 rounded-[9px] resize-none focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep'
            value={formData.description}
            name='description'
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        {/* Budget & Timeline */}
        <main className='flex w-full max-sm:mt-5 max-sm:flex-col justify-between gap-12 max-sm:gap-5 items-center'>
          <div className='w-1/2 max-md:w-full'>
            <label className='text-xl'>Estimated Budget <span className='text-deep'>*</span></label><br />
            <input
              type="text"
              name='estimate'
              className='w-full bg-lightGray py-4 px-5 rounded-[9px] focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep'
              value={formData.estimate}
              onChange={(e) => setFormData({ ...formData, estimate: e.target.value })}
              required
            />
          </div>
          <div className='w-1/2 max-md:w-full'>
            <label className='text-xl'>Preferred Timeline <span className='text-deep'>*</span></label><br />
            <input
              type="text"
              name='prefered'
              className='w-full bg-lightGray py-4 px-5 rounded-[9px] focus:outline-none focus:border-deep focus:ring-1 focus:ring-deep'
              value={formData.prefered}
              onChange={(e) => setFormData({ ...formData, prefered: e.target.value })}
              required
            />
          </div>
        </main>

        {/* File Upload */}
        <label htmlFor="upload" className="block text-xl mt-4 mb-2">File Upload*</label>
        <div className="w-full relative bg-[#E7D7D1] rounded-[9px]">
          <label htmlFor="upload" className="absolute inset-0 flex flex-col justify-center items-center cursor-pointer">
            <i className="z-10 p-3 rounded-md shadow-md text-center">
              <ImagePlus size={40} />
            </i>
            <p className='font-semibold'>Upload Media Here</p>
          </label>

          <input
            id="upload"
            name="upload"
            type="file"
            className="w-full max-md:h-[13rem] h-72 opacity-0 cursor-pointer"
            accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setUploadFile(file);
                const fileUrl = URL.createObjectURL(file);
                setPreview(fileUrl);

                return () => URL.revokeObjectURL(fileUrl);
              }
            }}
            ref={fileInputRef} // Add this
            required
          />

          {preview && (
            <div className="mt-4 absolute -top-4 left-0 z-40 w-full h-full flex justify-center items-center bg-transparent rounded-[9px]">
              <div className="relative flex flex-col items-center">
                <button
                  onClick={() => {
                    setPreview(null)
                    setUploadFile(null);
                    const uploadInput = document.getElementById("upload") as HTMLInputElement;
                    if (uploadInput) {
                      uploadInput.value = ""; // reset file input
                    }
                  }}
                  className="absolute -top-4 -right-4 bg-white text-red-700 rounded-full p-1 shadow-md"
                  title="Remove file"
                >
                  ❌
                </button>

                {uploadFile?.type.startsWith("image/") ? (
                  <img src={preview} alt="Preview" className="max-w-[300px] max-sm:h-[150px] max-h-[300px] rounded-lg shadow-md" />
                ) : uploadFile?.type.startsWith("video/") ? (
                  <video controls className="max-w-full max-h-[300px] rounded-lg shadow-md">
                    <source src={preview} type={uploadFile.type} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="text-center bg-white px-4 py-2 rounded shadow-md">
                    <p className="text-lg font-semibold">{uploadFile?.name}</p>
                    <p className="text-sm text-gray-500">Preview not available</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>


        {/* Submit Button */}
        <motion.div className='my-8 text-white font-semibold' whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.95 }}>
          <input type="submit" className='w-full bg-deep py-5 hover:bg-[#75432f] rounded-[9px] cursor-pointer' value="Submit Gig" />
        </motion.div>

        {/* Error Message */}
        {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
      </form>
    </div>
  )
}

export default Form
