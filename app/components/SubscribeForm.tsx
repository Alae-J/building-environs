import React from 'react';

const SubscribeForm: React.FC = () => (
  <form action="/podcasts/" method="post" className="w-full max-w-sm">
    <input type="hidden" name="form_id" value="18" />
    <div className="mb-4">
      <label htmlFor="email" className="block text-white mb-2">
        Email <span className="text-red-400">*</span>
      </label>
      <input
        id="email"
        name="item_meta[173]"
        type="email"
        required
        placeholder="Never miss an episode..."
        className="w-full px-3 py-2 rounded text-gray-900"
      />
    </div>
    <button type="submit" className="px-5 py-2 bg-blue-600 rounded">
      Subscribe
    </button>
  </form>
);

export default SubscribeForm;