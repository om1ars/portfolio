import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills '} span={'my languages'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Firebase'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Arabic'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'English'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'REACT JS'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'Russian'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'Redux, Redux-Saga, Redux-Thunk'}
                            width={'55%'}
                            text={'55%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
