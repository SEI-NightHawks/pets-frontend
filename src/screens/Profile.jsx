import FloatingBottomNav from "../components/footer/FloatingBottomNav.jsx";
import NavRest from "../components/Nav-rest.jsx";

const NeumorphismButton = ({ children }) => {
  return (
    <button
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

const Profile = () => {
  return (
    <div>
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
                    src="https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_1280.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* User Name */}
            <p className="text-xl font-bold mb-2">Dumbledoor</p>
            {/* User Stats */}
            <ul class="hidden md:flex space-x-8 mb-4">
              <li>
                <span class="font-semibold mb-1 mr-1">6</span>
                Posts
              </li>

              <li>
                <span class="font-semibold mb-1 mr-1">50.5k</span>
                Followers
              </li>
              <li>
                <span class="font-semibold mb-1 mr-1">10</span>
                Following
              </li>
            </ul>
            {/* Bio */}
            <div className="text-center mb-6">
              <p className="text-lg font-semibold mb-2"></p>
              {/* Add your user's bio content here */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elitashdjfkasdfd
                dfgsdfgsdfgdfgdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsd....
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <NeumorphismButton>Edit Profile</NeumorphismButton>
            <NeumorphismButton>Post</NeumorphismButton>
          </div>
        </div>
      </div>

      {/* Bottom Portion - Photo Gallery */}
      <div className="grid grid-cols-3 gap-4 bg-red-500 max-w-2xl mx-auto">
        {/* Replace the following with your photo data */}
        <div className="relative overflow-hidden rounded">
          <img
            src="https://cdn.pixabay.com/photo/2018/11/15/17/47/halloween-3817698_1280.jpg"
            alt="Photo 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://media.istockphoto.com/id/187468574/photo/doberman-pinscher-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=O-j3o8qv_ejmWlEBErri3BNlVOrrJTLdf0UT7rkLthA="
            alt="Photo 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://media.istockphoto.com/id/1223511966/photo/beautiful-tan-and-black-german-pinscher.jpg?s=612x612&w=0&k=20&c=8CxVvRyFA7klgRgwIKEbGInoTQhwoGoQ1kn_QgX8R_Q="
            alt="Photo 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://t3.ftcdn.net/jpg/01/41/05/84/360_F_141058449_210jjcd4uVxsG7UBqPsDACWEDrS9ZOPR.jpg"
            alt="Photo 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://t3.ftcdn.net/jpg/00/85/90/18/360_F_85901816_rqnXT1PW6xeMtBiIg8UmEJPZwUif9Uwr.jpg"
            alt="Photo 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://static.wixstatic.com/media/e5f819_01126f3b2de9401baa38dfa9ec5676f8~mv2.jpg/v1/fill/w_960,h_637,al_c,q_85,enc_auto/Hasko%202018%20.jpg"
            alt="Photo 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://media.istockphoto.com/id/182467304/photo/doberman-pinscher-dogs-outdoors-in-winter-snow-strong-intelligent-noble.jpg?s=612x612&w=0&k=20&c=XgDBQ5JWIO4-uPmK6JVEgOP-FnkA-XfXq75FPkU-Z20="
            alt="Photo 7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Dobermann_puppy.jpg/331px-Dobermann_puppy.jpg"
            alt="Photo 8"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://www.pumpkin.care/wp-content/uploads/2021/03/Doberman-Hero.jpg"
            alt="Photo 9"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://www.metlifepetinsurance.com/content/dam/metlifecom/us/metlifepetinsurance/images/blog/Thumbnails/breed-spotlight/doberman-pinscher.webp"
            alt="Photo 10"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://ppg-web-external.s3.amazonaws.com/uploads/zinnia/Doberman.jpg"
            alt="Photo 11"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Doberman-12833551920.jpg"
            alt="Photo 12"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Add more photo items as needed */}
      </div>
      <FloatingBottomNav />
    </div>
  );
};

export default Profile;
