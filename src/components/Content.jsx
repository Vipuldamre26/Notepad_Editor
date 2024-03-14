import './content.css';

const Content = () => {

    let oldData = [];

    // const [allData, ]

    if(localStorage.getItem('items') === null){
        localStorage.setItem('items', JSON.stringify([]));
    }
    else{
        oldData = JSON.parse(localStorage.getItem('items'));
    }






    return (
        <div className='content'>
            <div className='left-section'>
                {

                }
            </div>
        </div>
    )
}


export default Content;