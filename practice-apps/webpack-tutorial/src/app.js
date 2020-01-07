import "./style.css";


setTimeout(() =>{
    import('./math').then(module => {
        let {sum, diff} = module;

        console.log(sum(1, 2, 3, 4));
        
        console.log(diff(11, -5, 9, 0, 0));
    });
}, 5000)

