import FloatingBottomNav from "../components/footer/FloatingBottomNav.jsx";
import NavRest from "../components/Nav-rest.jsx";
import { useEffect, useState } from "react";
import { getPetPosts } from "../services/posts.js";
import { Link } from "react-router-dom";

const NeumorphismButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
    >
      {children}
    </button>
  );
};

function Profile({ pets, primaryPet, setPrimaryPet }) {
  const [petPosts, setPetPosts] = useState([]);
  const [openProfilePick, setOpenProfilePick] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [primaryPet]);

  async function fetchPosts() {
    if (!primaryPet) return;
    const petsPostsData = await getPetPosts(primaryPet?.id);
    setPetPosts(petsPostsData);
    console.log(petsPostsData);
  }

  function handleProfileClick(selectedPet) {
    setPrimaryPet(selectedPet);
    setOpenProfilePick(false); // Close the dropdown after selecting a profile
  }

  if (!primaryPet) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="mb-20">
        <NavRest />
        <div className="bg-gray-200">
          <div className="container mx-auto mt-8 bg-gray-200 p-4">
            {/* Background Container */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {/* Top Portion */}
              <div className="flex flex-col items-center justify-between mb-6">
                {/* Profile Picture */}
                <div className="flex-shrink-0 mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    {/* Add your profile picture source */}
                    <img
                      src={primaryPet?.profile_img}
                      alt="/"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
            {/* User Name */}
            <p className="text-xl font-bold mb-2">{primaryPet.name}</p>
            {/* User Stats */}
            <ul className="hidden md:flex space-x-8 mb-4">
              <li>
                <span className="font-semibold mb-1 mr-1">{petPosts.length}</span>
                Posts
              </li>
              <li>
                <span className="font-semibold mb-1 mr-1">{primaryPet.age}</span>
                Age
              </li>
              <li>
                <span className="font-semibold mb-1 mr-1">{primaryPet.gender}</span>
                Gender
              </li>
            </ul>
            {/* Bio */}
            <div className="text-center mb-6">
              <p className="text-lg font-semibold mb-2"></p>
              {/* Add your user's bio content here */}
              <p>{/* save for bio */}</p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <NeumorphismButton>Edit Profile</NeumorphismButton>
            <Link to="/upload">
  <NeumorphismButton>Post</NeumorphismButton>
</Link>
            <NeumorphismButton onClick={() => setOpenProfilePick((prev) => !prev)}>
              Switch Profile
            </NeumorphismButton>
          </div>
          {openProfilePick && (
            <div id="dropdownUsers" className="z-10 absolute bg-white rounded-lg shadow w-60 dark:bg-gray-700 mt-2">
              <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
                {pets.map((pet) => (
                  <li key={pet.id}>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleProfileClick(pet)}>
                      <img className="w-6 h-6 me-2 rounded-full" src={pet.profile_img} alt={pet.name} />
                      {pet.name}
                    </a>
                  </li>
                ))}
              </ul>
              <Link to="/createprofile" className="flex items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v-6h-2zm0-8h2v-2h-2z"/>
                </svg>
                Add new user
              </Link>
            </div>
            {openProfilePick && (
              <div>
                {pets.map((pet) => (
                  <img
                    src={pet.profile_img}
                    alt={pet.name}
                    onClick={() => handleProfileClick(pet)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Portion - Photo Gallery */}
        <div className="grid grid-cols-3 gap-4 bg-red-500 max-w-2xl mx-auto pb-4">
          {petPosts.map((petPost) => (
            <div key={petPost.id} className="relative overflow-hidden rounded">
              <img
                src={petPost.post_image}
                alt="pet post"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <FloatingBottomNav />
      </div>
    </div>
  );
}

export default Profile;
