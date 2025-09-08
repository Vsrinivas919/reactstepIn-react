const Parent = React.createElement('div',
    {id:'parent'},
    [React.createElement('div',{id:'child'},
       [React.createElement('h1',{id:'heading1'},'I am heading one'),React.createElement('h2',{id:'heading2'},'I am heading two')] 
    ),
React.createElement('div',{id:'child2'},
       [React.createElement('h1',{id:'heading1'},'I am heading one'),React.createElement('h2',{id:'heading2'},'I am heading two')] 
    )]
)



const heading = React.createElement('h1',{id:'heading'},'I am comin from react.....')
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(Parent)