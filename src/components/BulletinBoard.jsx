import ReactPost from './ReactPost';

const bulletinBoard = () => {
  const posts = [
    {
     question:'3 reasons why you should use React JS for Web development?',
     answer:'1. It’s easy to learn. Compared to other popular frontend frameworks like Angular & Vue, React are easier to learn. 2. UI-focused design. When creating an application, it is essential to have a good user interface. React JS will help you to build a rich user interface. If the user interfaces are poorly designed, it can reduce your chances of creating a successful application! 3. Flexibility. Thanks to its modular structure, React becomes easier to maintain. This flexibility, in turn, saves time and costs.',

    },

   {
     question:'What is a  Single-page Application and what makes it different from a "regular" website?',
     answer:'Single-Page Application (SPA) is a single web page/website/web application that works within a web browser and only loads a single document. SPA does not need page reloading when its used like the "normal" web page and most of its content remains the same while only some of it needs updating. As a result, performance increases for the users.',
   },

   {
     question:'Three differences between React and Angular.',
     answer:'1. React JS is a Javascript library, while Angular is a Javascript framework. 2. React is based on JavaScript and Angular is based on Typescript. 3.React are using JSX, an XML-like language built on top of JavaScript and Angular uses more classic templates based on extended HTML.'
   }
  ];

  return (
    <div>
      {posts.map((post) => <ReactPost question={post.question} answer={post.answer}key={post.id}/>)}
    </div>
  )
};

export default bulletinBoard
