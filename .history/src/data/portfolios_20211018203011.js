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
import netflix from './netflix.jpg'
import yt from './youtube.jpg'

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
        image: trans,
        link1: 'https://github.com/omar-slf/react-translator.git',
        link2: 'https://www.google.com',
        title: 'React Translator',
        text: 'Available on my YT channel'
    },
    {
        id: 6,
        category: 'Clones',
        image: netflix,
        link1: 'https://github.com/omar-slf/netflix-frontend.git',
        title: 'Responsive Clone',
        text: 'React only'
    },
    {
        id: 7,
        category: 'Clones',
        image: yt,
        link1: 'https://github.com/omar-slf/youtube-clone.git',
        title: 'Youtube website clone',
        text: 'React only'
    }
    {
        id: 7,
        category: 'Clones',
        image: yt,
        link1: 'https://github.com/omar-slf/youtube-clone.git',
        title: 'Youtube website clone',
        text: 'React only'
    }
]

export default portfolios;