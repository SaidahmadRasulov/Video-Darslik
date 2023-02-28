import React, { useContext, useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { NavLink, useParams } from 'react-router-dom';
import { MainContext } from '../../../context/MainContext';
import "./styles.css"
import 'react-accessible-accordion/dist/fancy-example.css';

function Section() {

  const { sections, lessons } = useContext(MainContext);
  const { id } = useParams();
  const [section, setSection] = useState({});

  useEffect(() => {
    sections.map(sect => {
      if (sect.profession.id == id) {
        setSection(sect);
      }
    })
  }, []);


  return (
    <div className='some'>
      <div className="max">
      <div className='sections'>
        <div className='profile-div'>
          <img src={section?.profession?.img} alt="" className='section-profile' />
        </div>
      <Accordion className='accordion_section'>
      <h1 className='section-title'>{section?.profession?.title}</h1> 
      {section?.sections?.map(secti => {
        return (
          <AccordionItem key={secti.id}>
          <AccordionItemHeading>
              <AccordionItemButton>
                  {secti.title}
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className='sort'>
            {lessons.map((lesson, index) => {
              if(lesson?.section?.id == secti?.id) {
                return (
                  <NavLink className='white' to={`/course/${lesson?.profession?.id}`}>
                    <p>{index + 1}. {lesson.title}</p>
                    </NavLink>
                  )
              }
            })}
          </AccordionItemPanel>
      </AccordionItem>
        )
      })}
        </Accordion>
      </div>
      </div>
    </div>
  )
}

export default Section;