import React from 'react'

const ReleaseDetailsForm = ({ formData, handleInputChange }) => {
  return (
    <form className='release-details-form'>
      <div className="form-groups">
         <div className="form-group">
            <label >Album, Single or EP Title</label>
            <input type="text"
             name="albumTitle"
             placeholder="Input title"
             value={formData.albumTitle}
             onChange={handleInputChange}
             />
           {/* <span>If this release contains the same featuring artist(s) for all tracks, please add the featuringartist(s) to the album title in this format “(feat. artistname)"</span>*/}
         </div>

         <div className="form-group">
            <label >Language</label>
            <select
            name="language"
            value={formData.language}
            onChange={handleInputChange}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            {/* Add other languages as needed */}
          </select>

         </div>
      </div>

      <div className="form-groups">
        <div className="form-group">
            <label >Album Version</label>
            <input type="text"
             name='albumVersion'
             value={formData.albumVersion}
              onChange={handleInputChange}
            placeholder='Input title'
/>
            <span>Album Version is used to distinguish different versions of the same album by the same artist (e.g. 'Live from San Francisco', 'Club Remix', 'Radio Edit').</span>
        </div>

        <div className="form-group">
            <label >Artist Name*</label>
            <input type="text"
             name='artistName'
             value={formData.artistName}
             onChange={handleInputChange}
            placeholder='Input Artist' />
            <span>Input in this order; Primary Artist then any other artist (Separate Artists by comma)</span>
        </div>

        <div className="form-group">
            <label >Publishing Information</label>
            <input type="text"
             name='publishingInformation'
             value={formData.publishingInformation}
             onChange={handleInputChange}
            placeholder='Input Info' />
            <span>Providing accurate composers and lyricists for this release is important for ensuring all writers are correctly credited at the stores and are eligible for publishing royalties. One composer is required but we encourage as much creditation as possible!</span>
        </div>
      </div>

      <div className="form-groups genre">
          <div className="form-group">
            <label >Compilation Album</label>
            <select
            name="compilationAlbum"
            value={formData.compilationAlbum}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          </div>
          <div className="form-group">
            <label >Lyrics?</label>
            <select
            name="lyrics"
            value={formData.lyrics}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          </div>
          <div className="form-group">
            <label >Primary Genre*</label>
            <select
            name="primaryGenre"
            value={formData.primaryGenre}
            onChange={handleInputChange}
          >
            <option value="">Select Genre</option>
            <option value="Alternative">Alternative</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            {/* Add other genres as needed */}
          </select>
          </div>
          <div className="form-group">
            <label >Secondary Genre</label>
            <select
            name="secondaryGenre"
            value={formData.secondaryGenre}
            onChange={handleInputChange}
          >
            <option value="">Select Genre</option>
            <option value="None">None</option>
            <option value="Jazz">Jazz</option>
            {/* Add other genres as needed */}
          </select>
          </div>
          <div className="form-group">
            <label >Explicit Content</label>
            <select
            name="explicitContent"
            value={formData.explicitContent}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          </div>
      </div>

      <div className="form-groups">
        <div className="form-group">
           <label >Composition RIght*</label>
           <select name="Composition RIght"
           value={formData.compositionRight}
           onChange={handleInputChange}
           id="">
            <option value="">Year</option>
              {/* Populate years dynamically */}
              <option value="2024">2024</option>
           </select>
        </div>
        <div className="form-group">
           <label >Sound Recording Copyright*</label>
           <select name="Composition RIght"
            value={formData.soundRecordingYear}
            onChange={handleInputChange}
           id="">
            <option value="">Year</option>
              {/* Populate years dynamically */}
              <option value="2024">2024</option>
           </select>
        </div>
        <div className="form-group">
            <label >Record Label</label>
            <input 
            type="text"
            name='label'
            value={formData.label}
            onChange={handleInputChange}
             placeholder='Label name' />
        </div>
      </div>

      <div className="form-grouped">
      <div className="form-group">
            <label for="original-release-date">Original Release Date</label>
            <div>
            <select
              name="originalReleaseDay"
              value={formData.originalReleaseDay}
              onChange={handleInputChange}
            >
              <option value="">Day</option>
              {/* Populate days dynamically */}
              <option value="01">01</option>
            </select>
            <select
              name="originalReleaseMonth"
              value={formData.originalReleaseMonth}
              onChange={handleInputChange}
            >
              <option value="">Month</option>
              {/* Populate months dynamically */}
              <option value="01">01</option>
            </select>
            <select
              name="originalReleaseYear"
              value={formData.originalReleaseYear}
              onChange={handleInputChange}
            >
              <option value="">Year</option>
              {/* Populate years dynamically */}
              <option value="2024">2024</option>
            </select>
            </div>
        </div>

        <div className="form-group">
            <label for="pre-order-date">Pre Order Date</label>
            <div>
                <select name="pre-order-day"
                value={formData.preOrderDay}
                onChange={handleInputChange}
                id="pre-order-day">
                    <option value="">Day</option>
              {/* Populate days dynamically */}
              <option value="01">01</option>
                </select>
                <select name="pre-order-month"
                value={formData.preOrderMonth}
                onChange={handleInputChange}
                id="pre-order-month">
                    <option value="">Month</option>
              {/* Populate months dynamically */}
              <option value="01">01</option>
                </select>
                <select name="pre-order-year"
                value={formData.preOrderYear}
                onChange={handleInputChange}
                id="pre-order-year">
                    <option value="">Year</option>
              {/* Populate years dynamically */}
              <option value="2024">2024</option>
                </select>
            </div>
        </div>

        <div className="form-group">
            <label for="sales-start-date">Sales Start Date</label>
            <div>
                <select name="sales-start-day"
                value={formData.salesStartDay}
                onChange={handleInputChange}
                id="sales-start-day">
                    <option value="">Day</option>
              {/* Populate days dynamically */}
              <option value="01">01</option>
                </select>
                <select name="sales-start-month"
                value={formData.salesStartMonth}
                onChange={handleInputChange}
                id="sales-start-month">
                    <option value="">Month</option>
              {/* Populate months dynamically */}
              <option value="01">01</option>
                </select>
                <select name="sales-start-year"
                 value={formData.salesStartYear}
                 onChange={handleInputChange}
                id="sales-start-year">
                    <option value="">Year</option>
              {/* Populate years dynamically */}
              <option value="2024">2024</option>
                </select>
            </div>
        </div>
      </div>
    </form>
  )
}

export default ReleaseDetailsForm
