import React, { useState } from "react";
import "./strona-mc.css";

const StronaMC: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [sections, setSections] = useState([
    { id: 1, name: "Course noticeboard Forum" },
    { id: 2, name: "About this course" },
    { id: 3, name: "Prior experience check" },
  ]);

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleSectionChange = (id: number, newName: string) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, name: newName } : section
      )
    );
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newSections = [...sections];
    [newSections[index - 1], newSections[index]] = [
      newSections[index],
      newSections[index - 1],
    ];
    setSections(newSections);
  };

  const handleMoveDown = (index: number) => {
    if (index === sections.length - 1) return;
    const newSections = [...sections];
    [newSections[index], newSections[index + 1]] = [
      newSections[index + 1],
      newSections[index],
    ];
    setSections(newSections);
  };

  return (
    <div className="course-page">
      <header className="header">
        <h1>Mindful Course Creation</h1>
        <button onClick={handleEditToggle} className="edit-mode-btn">
          {editMode ? "Save Changes" : "Edit mode"}
        </button>
      </header>

      <div className="course-content">
        <img
          src="meditatingwomen.png"
          alt="Meditating Woman"
          className="course-image"
        />
        <p>
          Create your course and give your learners a mindful, stress-free
          experience with Moodle LMS 4.
        </p>

        <div className="sections-list">
          {sections.map((section, index) => (
            <div key={section.id} className="section-item">
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={section.name}
                    onChange={(e) =>
                      handleSectionChange(section.id, e.target.value)
                    }
                  />
                  <button onClick={() => handleMoveUp(index)}>⬆</button>
                  <button onClick={() => handleMoveDown(index)}>⬇</button>
                </>
              ) : (
                <h3>{section.name}</h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StronaMC;
