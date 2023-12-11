import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../App.css";

const Profile = () => {
  const [pets, setPets] = useState([]);
  const [petSpecies, setPetSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [profile_Img, setprofile_Img] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  const addPet = (e) => {
    e.preventDefault();
    const newPet = {
      species: petSpecies,
      breed: breed,
      Age: age,
      profile_Img: profile_Img,
      gender: gender,
      name: name,
    };
    setPets([...pets, newPet]);
  };

  return (
    <section className="grid min-h-screen grid-cols-1 bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]">
      <Form
        petSpecies={petSpecies}
        breed={breed}
        Age={age}
        profile_Img={profile_Img}
        gender={gender}
        name={name}
        onPetSpeciesChange={(value) => setPetSpecies(value)}
        onBreedChange={(value) => setBreed(value)}
        onAgeChange={(value) => setAge(value)}
        onprofile_ImgChange={(value) => setprofile_Img(value)}
        onNameChange={(value) => setName(value)}
        onGenderChange={(value) => setGender(value)}
        onAddPet={addPet}
      />
    </section>
  );
};

const Form = ({
  petSpecies,
  breed,
  age,
  profile_Img,
  gender,
  name,
  onPetSpeciesChange,
  onBreedChange,
  onAgeChange,
  onprofile_ImgChange,
  onNameChange,
  onGenderChange,
  onAddPet,
}) => {
  const primaryVariants = {
    initial: {
      y: 25,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
          variants={primaryVariants}
          className="mb-2 text-center text-4xl font-semibold"
        >
          Create Your Pet's Bio
        </motion.h1>
        {/* <motion.p
          variants={primaryVariants}
          className="mb-8 text-center"
        ></motion.p> */}

        <form onSubmit={onAddPet} className="w-full">
          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label className="mb-1 inline-block text-sm font-medium">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="input"
              placeholder="Pet's Name"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label className="mb-1 inline-block text-sm font-medium">
              Species<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Species"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              value={petSpecies}
              onChange={(e) => onPetSpeciesChange(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-2 w-full">
            <label className="mb-1 inline-block text-sm font-medium">
              Breed<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Pet's Breed"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              value={breed}
              onChange={(e) => onBreedChange(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label className="mb-1 inline-block text-sm font-medium">
              Age <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              placeholder="Pet's Age"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              value={age}
              onChange={(e) => onAgeChange(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label className="mb-1 inline-block text-sm font-medium">
              Gender <span className="text-red-600">*</span>
            </label>
            <input
              type="input"
              placeholder="Pet's Gender"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              value={gender}
              onChange={(e) => onGenderChange(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={primaryVariants} className="mb-4 w-full">
            <label className="mb-1 inline-block text-sm font-medium">
              Pet's Profile Picture URL <span className="text-red-600">*</span>
            </label>
            <input
              type="url"
              placeholder="Pet's Profile Picture URL"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              value={profile_Img}
              onChange={(e) => onprofile_ImgChange(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            variants={primaryVariants}
            whileTap={{
              scale: 0.985,
            }}
            type="submit"
            className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Profile;

// const Profile = () => {
//  const [pets, setPets] = useState([]);
//  const [petSpecies, setPetSpecies] = useState("");
//  const [breed, setBreed] = useState("");
//  const [Age, setAge] = useState("");
//  const [profile_Img, setprofile_Img] = useState(null);

//  const addPet = (e) => {
//     e.preventDefault();
//     const newPet = {
//       species: petSpecies,
//       breed: breed,
//       Age: Age,
//       profile_Img: profile_Img,
//     };
//     setPets([...pets, newPet]);
//  };

//  return (
//     <div >
//       <form onSubmit={addPet}>
//         <label>
//           Species:
//           <input
//             type="text"
//             value={petSpecies}
//             onChange={(e) => setPetSpecies(e.target.value)}
//           />
//         </label>
//         <label>
//           Breed:
//           <input
//             type="text"
//             value={breed}
//             onChange={(e) => setBreed(e.target.value)}
//           />
//         </label>
//         <label>
//           Date of Birth:
//           <input
//             type="date"
//             value={Age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </label>
//         <label>
//           Profile Pet Picture:
//           <input
//             type="file"
//             onChange={handleprofile_ImgChange}
//           />
//         </label>
//         <button type="submit">Add Pet</button>
//       </form>
//     </div>
//  );
// };

// export default Profile;
