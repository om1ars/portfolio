import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';
import amazon from './amazon.jpg'
import chat from './chat.jpg'
import projects from './project.png'
import gmail from './gmail.png'
import trans from './googletrans.png'

const portfolios = [
    {
        id: 1,
        category: 'Clones',
        image: amazon,
        link1: 'https://github.com/omar-slf/amazon-clone.git',
        title: 'Responsive Amazon Clone',
        text: 'Created with React .'
    },
    {
        id: 2,
        category: 'Projects',
        image: chat,
        link1: 'https://github.com/omar-slf/chat-UI.git',
        title: 'Simple inspired Chat UI',
        text: 'with React and UI'
    },
    {
        id: 3,
        category: 'Projects',
        image: projects,
        link1: 'https://github.com/omar-slf/Project.git',
        title: 'Projects made by order',
        text: 'React only'
    },
    {
        id: 4,
        category: 'Clones',
        image: gmail,
        link1: 'https://github.com/omar-slf/gmail-clone.git',
        title: 'Gmail Clone',
        text: 'React and Firebase'
    },
    {
        id: 5,
        category: 'Projects',
        image: img2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Use Blender',
        text: 'Free Animation Software'
    },
    {
        id: 6,
        category: 'React JS',
        image: react1,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
    {
        id: 7,
        category: 'CSS',
        image: css2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Microsoft Website Clone',
        text: 'Created using HTML and CSS'
    }
]

export default portfolios;