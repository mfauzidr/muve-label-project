import React, { useState } from "react";
import PersonDetail from "./PersonDetail";
import { orgData } from "../data/orgData";

// Define type for each person in the organization structure
interface Person {
  id: number;
  name: string;
  nickname?: string;
  position: string;
  photo: string;
  members?: Person[]; // Optionally add members for each division
}

const OrgChart: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handlePersonClick = (person: Person) => {
    const resetPerson = {
      ...person,
      members: orgData.find((p) => p.id === person.id)?.members,
    };
    setSelectedPerson(resetPerson); // Show the clicked person details
  };

  const handleMemberClick = (member: {
    id: number;
    name: string;
    nickname?: string;
    photo: string;
    position: string;
  }) => {
    // Find the clicked member's leader and get their details
    const clickedPerson = orgData.find((person) =>
      person.members?.some((mem) => mem.id === member.id)
    );

    if (clickedPerson) {
      // Set the selected person to the clicked member's details
      setSelectedPerson({
        id: member.id,
        name: member.name,
        position: member.position,
        photo: member.photo, // Update with actual photo URL
        members: clickedPerson.members, // Keep the member list unchanged
      });
    }
  };

  return (
    <div className="items-center p-6">
      <div className="w-full text-center space-y-6">
        <h2 className="text-2xl font-bold mb-6">Organizational Chart</h2>

        <div className="flex flex-col gap-3 items-center">
          {orgData.slice(0, 4).map((person) => (
            <div
              key={person.id}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg shadow-md border w-52"
              onClick={() => handlePersonClick(person)}
            >
              <h3 className="text-base font-semibold">{person.position}</h3>
              <p className="text-sm">{person.name}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-6">
          {orgData.slice(4).map((person) => (
            <div
              key={person.id}
              className="flex flex-col justify-center cursor-pointer hover:bg-gray-100 p-4 rounded-lg shadow-md border w-48"
              onClick={() => handlePersonClick(person)}
            >
              <h3 className="text-base font-semibold">{person.position}</h3>
              <p className="text-sm">{person.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        {selectedPerson ? (
          <PersonDetail
            isVisible={true}
            name={selectedPerson.name}
            position={selectedPerson.position}
            photo={selectedPerson.photo}
            members={selectedPerson.members} // Pass updated list of members
            onMemberClick={(member) => handleMemberClick(member)} // Pass the handler for member clicks
          />
        ) : (
          <p className="text-gray-500">
            Click on a person to view their details.
          </p>
        )}
      </div>
    </div>
  );
};

export default OrgChart;
