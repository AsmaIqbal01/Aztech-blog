'use client';
import React, { useState } from 'react';

interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !comment) return;

    const newComment: Comment = {
      id: Date.now(),
      name,
      text: comment,
      date: new Date().toLocaleString(),
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setName('');
    setComment('');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Your Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here"
            rows={4}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Submit Comment
        </button>
      </form>

      {/* Display Comments */}
      <div>
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id} className="mb-4 p-4 bg-white border border-gray-200 rounded-md">
              <p className="text-sm text-gray-500">{c.date}</p>
              <h4 className="font-medium text-lg">{c.name}</h4>
              <p className="text-gray-700">{c.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;