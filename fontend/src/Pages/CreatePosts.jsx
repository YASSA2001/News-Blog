import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useForm } from 'react-hook-form';


export const CreatePosts = () => {

  const { register, handleSubmit } = useForm();
  const [content, setContent] = useState('');

  const onSubmit = (data) => {
    // Combine form data and content
    const postData = { ...data, content };
    console.log(postData);
    // You can send postData to your server here
  };
  return (
    <div className="create-post-container ">
      <h2 className=''>Create Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-20'>
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        <select {...register('category', { required: true })}>
          <option value="Entertainment">Entertainment</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          {/* Add more categories as needed */}
        </select>
        <ReactQuill value={content} onChange={setContent} />
        <input type="file" {...register('thumbnail')} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
