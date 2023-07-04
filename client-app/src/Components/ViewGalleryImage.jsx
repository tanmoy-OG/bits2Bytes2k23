const ViewGalleryImage = ({img, tag, setChildVisible}) => {

    return(
        <div className="fixed top-0 left-0 z-50 w-full h-full backdrop-blur-lg flex flex-col justify-center" onClick={()=>{setChildVisible(false)}}>
            <div className="flex justify-center items-center h-auto max-h-96 p-5 rounded-md">
                <img src={img} alt="" className="h-full rounded-md" />
            </div>
            <div className="md:text-2xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase">{tag}</div>
        </div>
    );
}

export default ViewGalleryImage;

