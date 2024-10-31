import { useState } from 'react';

export default function ProfileSettings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ name, email, address, profileImage });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <label className="mr-4">Profile Image:</label>
          <input type="file" onChange={handleImageChange} className="border rounded-md p-2" />
        </div>
        {profileImage && (
          <img src={profileImage} alt="Profile Preview" className="w-32 h-32 rounded-full mt-2" />
        )}
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded-md p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
