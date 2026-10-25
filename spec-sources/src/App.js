import './App.css';
import Button from './Components/Button';
import SourceItem from './Components/SourceItem';

function App() {
  return (
    <div className="app">
      <div className="header">
    		<img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="spectator logo" width="263" height="55"></img>
      </div>

			<div className="main-container">
      	<h1>Spectator's Sources</h1>

        <div className="source-form">
						<p className="input-text">Source Name:</p>
						<input type="text" className="input-box"/>
						<p className="input-text">Source Email:</p>
						<input type="text" className="input-box"/>
						<Button
							label = "ADD"
							type = "add-button"/>
				</div>

            <div className="sources-list">
							<SourceItem
								itemNumber = "1"
								itemSource = "Presbo"
								itemEmail = "presbo@columbia.edu"
							/>

							<SourceItem
								itemNumber = "2"
								itemSource = "John Jay Mouse"
								itemEmail = "mouse@columbia.edu"
							/>

							<SourceItem
								itemNumber = "3"
								itemSource = "Water Bottle Man"
								itemEmail = "flipper@columbia.edu"
							/>
            </div>
        </div>


    </div>
  );
}

export default App;
