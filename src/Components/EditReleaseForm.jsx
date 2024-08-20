import "./FormStyles.css"

function EditReleaseForm() {
    return(
        <section className="form-section">
            <form>
            <label htmlFor="title">Title</label>
                <input type="text" />
                <label htmlFor="date">Date of release</label>
                <input type="date" />
                <label htmlFor="producer">Producer</label>
                <input type="text" />
                <label htmlFor="imageUrl">Image</label>
                <input type="text" />

                <button type="submit">Save</button>
                <button>Cancel</button>
            </form>
        </section>
    )
}

export default EditReleaseForm