import React from 'react'
// import PropTypes from 'prop-types'

function HexToRGB(props) {
    const hexArray = Array.from(props.hexCode);
    let rgb=null;
    if(hexArray.length === 7 && hexArray[0] === '#') {
        let r = parseInt(hexArray[1] + hexArray[2], 16);
        let g = parseInt(hexArray[3] + hexArray[4], 16);
        let b = parseInt(hexArray[5] + hexArray[6], 16);

        rgb = isNaN(r) || isNaN(g) || isNaN(b) ? -1 : `rgb(${r}, ${g}, ${b})`;

        let form = document.querySelector('.wrap-background');
        rgb !== -1 ? form.setAttribute('style', `background-color: rgba(${r}, ${g}, ${b}, 0.5`) : form.setAttribute('style', 'background-color: rgba(255, 0, 0, 0.6)' )
    }else if(hexArray.length === 0 )
    {
        let form = document.querySelector('.wrap-background');

        if(form) form.setAttribute('style', `background-color: rgba(0, 0, 0, 0.5`)
        // rgb=0;
    }

    let SetRGBStyle = {
        backgroundColor: rgb,
        color: rgb !== 'rgb(255, 255, 255)' ? 'white' : 'black'
    }


    return (
        <div className='wrap-main  wrap-result' style={rgb === -1 ? {backgroundColor: 'red', color: 'white'} : SetRGBStyle}>
            <p className='result' >
                {rgb === null ? 'Введите цвет <#ffffff>' : rgb!==-1?rgb:'Ошибка'}
            </p>
        </div>
    )
}


export default HexToRGB