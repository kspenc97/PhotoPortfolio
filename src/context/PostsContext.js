import React, {createContext, useState, useEffect} from 'react';

export const PostsContext = createContext();


export const PostsState =  ({children}) => {
    //3. Data is put into these
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [img1, setImg1] = useState('../websitePhotos/1/1.jpg');
    //1. Runs when it first Opens
    useEffect(() => {
        getPosts();
    }, []);
    //2. This Functiopn runs
    const getPosts = async () => {
        setLoading(true);
       /*  const res = await fetch('http://localhost:8000/posts');
        const data = await res.json(); */
        const data = [
            {
              id: 1,
              title: "Cabin in the woods",
              body: "magna aliqua et nostrud veniam sunt commodo quis do ut duis ex nulla sint consectetur eu proident id culpa consectetur ex dolore enim magna ullamco deserunt aute ad qui commodo amet sunt eiusmod Lorem esse deserunt in labore nisi exercitation non magna consequat tempor aliqua cillum ut elit incididunt anim proident elit est voluptate est proident elit deserunt culpa enim incididunt ullamco nulla nulla deserunt consequat pariatur reprehenderit ex esse ex fugiat sit officia mollit ipsum dolor commodo cupidatat laborum anim in aliqua ea exercitation eiusmod irure sit magna id laborum quis consequat amet non veniam cupidatat veniam sint laborum consectetur id anim nostrud tempor quis consequat incididunt laboris anim id anim eu nulla occaecat exercitation veniam voluptate eu sunt",
              date: "05/17/2020",
              location: "Near Flagstaff Arizona",
              author: "author Test",
              image: "image1"
            },
            {
              id: 2,
              title: "Florida Bay",
              body: "velit exercitation est et Lorem exercitation cillum velit fugiat consectetur Lorem laboris Lorem culpa consequat velit non aute amet eu Lorem amet dolor minim exercitation ipsum labore exercitation commodo ullamco nisi voluptate velit ut aute culpa aute adipisicing consectetur elit tempor mollit laborum velit aliquip sit culpa aliqua do amet cillum labore esse non elit mollit ea sint reprehenderit tempor irure ea sit consequat reprehenderit nisi duis reprehenderit sit elit sint adipisicing eiusmod esse do nostrud tempor elit aliquip qui qui deserunt laborum aliquip est veniam cillum ea qui exercitation id deserunt culpa magna ea aliquip dolore mollit sit est amet adipisicing quis et non minim do excepteur veniam duis adipisicing ipsum duis aliqua minim minim ut ut ut cupidatat",
              date: "06/20/2019",
              location: "Clearwater Florida",
              author: "author 22 Test",
              image: "image2"
            },
            {
              id: 3,
              title: "Dirt Track Racing",
              body: "feage velit exercitation est et Lorem exercitation cillum velit fugiat consectetur Lorem laboris Lorem culpa consequat velit non aute amet eu Lorem amet dolor minim exercitation ipsum labore exercitation commodo ullamco nisi voluptate velit ut aute culpa aute adipisicing consectetur elit tempor mollit laborum velit aliquip sit culpa aliqua do amet cillum labore esse non elit mollit ea sint reprehenderit tempor irure ea sit consequat reprehenderit nisi duis reprehenderit sit elit sint adipisicing eiusmod esse do nostrud tempor elit aliquip qui qui deserunt laborum aliquip est veniam cillum ea qui exercitation id deserunt culpa magna ea aliquip dolore mollit sit est amet adipisicing quis et non minim do excepteur veniam duis adipisicing ipsum duis aliqua minim minim ut ut ut cupidatat",
              date: "09/20/2020",
              location: "Omaha Nebraska",
              author: "author 22 Test",
              image: "image3"
            },
            {
              id: 4,
              title: "Draynor Manor",
              body: "Runescape velit exercitation est et Lorem exercitation cillum velit fugiat consectetur Lorem laboris Lorem culpa consequat velit non aute amet eu Lorem amet dolor minim exercitation ipsum labore exercitation commodo ullamco nisi voluptate velit ut aute culpa aute adipisicing consectetur elit tempor mollit laborum velit aliquip sit culpa aliqua do amet cillum labore esse non elit mollit ea sint reprehenderit tempor irure ea sit consequat reprehenderit nisi duis reprehenderit sit elit sint adipisicing eiusmod esse do nostrud tempor elit aliquip qui qui deserunt laborum aliquip est veniam cillum ea qui exercitation id deserunt culpa magna ea aliquip dolore mollit sit est amet adipisicing quis et non minim do excepteur veniam duis adipisicing ipsum duis aliqua minim minim ut ut ut cupidatat",
              date: "02/17/2018",
              location: "Acadia Relm",
              author: "author 22 Test",
              image: "image4"
            },
            {
              id: 5,
              title: "Denver Columns",
              body: "vaevhelit exercitation est et Lorem exercitation cillum velit fugiat consectetur Lorem laboris Lorem culpa consequat velit non aute amet eu Lorem amet dolor minim exercitation ipsum labore exercitation commodo ullamco nisi voluptate velit ut aute culpa aute adipisicing consectetur elit tempor mollit laborum velit aliquip sit culpa aliqua do amet cillum labore esse non elit mollit ea sint reprehenderit tempor irure ea sit consequat reprehenderit nisi duis reprehenderit sit elit sint adipisicing eiusmod esse do nostrud tempor elit aliquip qui qui deserunt laborum aliquip est veniam cillum ea qui exercitation id deserunt culpa magna ea aliquip dolore mollit sit est amet adipisicing quis et non minim do excepteur veniam duis adipisicing ipsum duis aliqua minim minim ut ut ut cupidatat",
              date: "12/14/2021",
              location: "Denver Colorado",
              author: "author 22 Test",
              image: "image5"
            }
          ]

        setPosts(data);
        setLoading(false);
    }

    //Get Post By Id


    return (
        <PostsContext.Provider value={{
           posts,
           loading,
           img1

        }}>
            {children}

        </PostsContext.Provider>
    )
}