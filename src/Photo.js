export default function Photo({slideIndex ,index}) {

return ( 
<div

className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
<img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />

</div>
    )   
}
