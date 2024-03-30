import {openUploadWidget} from "../../utils/CloudinaryService";
import {cloudinary_upload_preset} from "../../config";

const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dm4m9weza",
                uploadPreset:cloudinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                 console.log(result.info)
                    setUrl(result.info.secure_url);
                     setName(result.info.original_filename);
                } else {
                    if (error) {
                     alert("Could not upload");
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black  rounded-full p-4 font-semibold"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
};

export default CloudinaryUpload;
