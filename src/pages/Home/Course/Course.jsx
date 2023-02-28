import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { MainContext } from '../../../context/MainContext';
import "./style.css";

function Course() {
    const { lessons, sections } = useContext(MainContext)
    const { id } = useParams();
    const [courses, setCourses] = useState([]);
    const [section, setSection] = useState([]);
    const [link, setLink] = useState("");


    useEffect(() => {
        setCourses([]);
        let all = []
        lessons.map(lesson => {
            if (lesson.profession.id == id) {
                all.push(lesson)
            }
        })
        setCourses(all);
        sections.map(section => {
            if (section.profession.id == id) {
                setSection(section.sections)
            }
        })
    }, [id])


    const element = sections.map(s => {
        if (s.profession.id == id) {
            s.sections.map(section => {
                return <p key={section.id}>{section.title}</p>
            })
        }
    })

    return (
        <div className="courses-div">
            <div className='courses'>
                <div className="lessons">
                    {section.map(s => {
                        return (
                            <div>
                                <p className='s-title'>{s.title}</p>
                                <ul className="list-group">
                                    {courses.map((course, index) => {
                                        if (s.id == course.section.id)
                                            return (
                                                <li  key={course.id + `${index}_s`}>
                                                    <NavLink className={(isActive) => isActive.isActive ? "list-group-item active" : "list-group-item" } to={`/course/video${course.yt_video}`}>
                                                        <div>{index + 1}&nbsp; {course.title}</div>
                                                        <div>
                                                            <input type="checkbox" value={course.is_completed} className='input-check' />
                                                        </div>
                                                    </NavLink>
                                                </li>
                                            )
                                    })}
                                </ul>
                            </div>
                        )
                    })}

                </div>
                <div className="lesson">
                    <div className="nav-yt-video">
                        <button>
                            <i className='bi bi-check-circle'></i>&nbsp;
                            Complete
                        </button>
                    </div>
                    <div className="youtube-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${lessons.yt_video}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course