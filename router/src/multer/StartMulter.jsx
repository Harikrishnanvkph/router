import axios from 'axios';

function StartMulter() {
    const handleFileInput = async (event)=>{
        console.log("handleFileInput", event.target.files[0]);
        const file = event.target.files[0];
        const form = new FormData();
        form.append('fileUpload', file);
        form.append("type","diskStorage");
        await axios({
            url: "http://localhost:3000/multer/fileUpload",
            method : "POST",
            data: form,
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        })
        console.log("handleFileInput success");
    }

    return (
        <div>
            <div>
                <input type="file" onChange={handleFileInput} />
            </div>
            <div>
                <img src=""  alt="Default" />
            </div>
        </div>
    );
}

export default StartMulter;