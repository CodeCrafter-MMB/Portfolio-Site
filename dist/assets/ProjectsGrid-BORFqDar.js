import{m as p,L as x,r as l,e as u}from"./index-C_QkVQxY.js";import{I as b,a as h,b as k,c as P,d as E,e as R}from"./ui-project-2-B89WGbom.js";const m=({title:a,category:t,image:n})=>React.createElement(p.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15}},React.createElement(x,{to:"/projects/single-project","aria-label":"Single Project"},React.createElement("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"},React.createElement("div",null,React.createElement("img",{src:n,className:"rounded-t-xl border-none",alt:"Single Project"})),React.createElement("div",{className:"text-center px-4 py-6"},React.createElement("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2"},a),React.createElement("span",{className:"text-lg text-ternary-dark dark:text-ternary-light"},t))))),j=[{id:1,title:"Google Health Platform",category:"Web Application",img:b,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:h},{id:3,title:"Project Management UI",category:"UI/UX Design",img:k},{id:4,title:"Cloud Storage Platform",category:"UI/UX Design",img:P},{id:5,title:"React Social App",category:"Mobile Application",img:E},{id:6,title:"Apple Design System",category:"Web Application",img:R}],d=l.createContext(),I=a=>{const[t,n]=l.useState(j),[c,o]=l.useState(""),[s,i]=l.useState(""),e=t.filter(r=>r.title.toLowerCase().includes(c.toLowerCase())||c===""?r:""),g=t.filter(r=>(r.category.charAt(0).toUpperCase()+r.category.slice(1)).includes(s));return React.createElement(d.Provider,{value:{projects:t,setProjects:n,searchProject:c,setSearchProject:o,searchProjectsByTitle:e,selectProject:s,setSelectProject:i,selectProjectsByCategory:g}},a.children)},N=["Web Application","Mobile Application","UI/UX Design","Branding"],f=({setSelectProject:a})=>React.createElement("select",{onChange:t=>{a(t.target.value)},className:`font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            `},React.createElement("option",{value:a,className:"text-sm sm:text-md"},"All Projects"),N.map(t=>React.createElement("option",{className:"text-normal sm:text-md",key:t},t))),C=()=>{const{projects:a,searchProject:t,setSearchProject:n,searchProjectsByTitle:c,selectProject:o,setSelectProject:s,selectProjectsByCategory:i}=l.useContext(d);return React.createElement("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10"},React.createElement("div",{className:"text-center"},React.createElement("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"},"Projects portfolio")),React.createElement("div",{className:"mt-10 sm:mt-16"},React.createElement("h3",{className:`font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        `},"Search projects by title or filter by category"),React.createElement("div",{className:`
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        `},React.createElement("div",{className:"flex justify-between gap-2"},React.createElement("span",{className:`
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                `},React.createElement(u,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})),React.createElement("input",{onChange:e=>{n(e.target.value)},className:`font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                `,id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})),React.createElement(f,{setSelectProject:s}))),React.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"},o?i.map(e=>React.createElement(m,{title:e.title,category:e.category,image:e.img,key:e.id})):t?c.map(e=>React.createElement(m,{title:e.title,category:e.category,image:e.img,key:e.id})):a.map(e=>React.createElement(m,{title:e.title,category:e.category,image:e.img,key:e.id}))))};export{I as P,C as a};
