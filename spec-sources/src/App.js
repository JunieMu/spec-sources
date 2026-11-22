import './App.css';
import Button from './Components/Button';
import SourceItem from './Components/SourceItem';
import { useState, useEffect } from 'react';
import axios from 'axios';


// const DEFAULT_SOURCES = [
//   { id: 1, name: "Presbo", email: "presbo@columbia.edu" },
//   { id: 2, name: "John Jay Mouse", email: "mouse@columbia.edu" },
//   { id: 3, name: "Water Bottle Man", email: "flipper@columbia.edu" },
// ];

function App() {
	const [message, setMessage] = useState('');
	const [sources, setSources] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:8000/')
			.then(response => {
        		setMessage(response.data.message);
      		})
    		.catch(error => {
        		console.error('There was an error connecting to the API!', error);
      		});

		axios.get('http://localhost:8000/all')
			.then((response) => {
				setSources(response.data);
			})
			.catch(error => {
				console.error('There was an error fetching the sources!', error);
			});
		}, []);

	// const [sources, setSources] = useState(() => {
	// 	const saved = localStorage.getItem('spectator_sources');
	// 	if (saved) {
	// 		try {
	// 			return JSON.parse(saved);
	// 		} catch (err) {
	// 			console.error("Failed to parse sources from localStorage:", err);
	// 		}
	// 	}
	// 	return DEFAULT_SOURCES;
 	// });

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

//   useEffect(() => {
//     localStorage.setItem('spectator_sources', JSON.stringify(sources));
//   }, [sources]);

  const handleAddSource = () => {
	if (!nameInput.trim() || !emailInput.trim()) {
		return;
	}

	const payload = {
		name: nameInput.trim(),
		email: emailInput.trim(),
	};
	
	// const newSource = {
	// id: Date.now(),
	// name: nameInput.trim(),
	// email: emailInput.trim(),
  	// };

	// setSources([...sources, newSource]);
	// setNameInput('');
	// setEmailInput('');

	axios.post('http://localhost:8000/create', payload)
		.then(({ data }) => {
			setSources((prevSources) => [
				...prevSources,
				{
					id: data.id,
					name: data.name,
					email: data.email,
				},
			]);
			setNameInput('');
			setEmailInput('');
		})
		.catch((error) => {
			console.error('Error adding source:', error);
		});

  };

  const handleDeleteSource = (idToDelete) => {
	axios.delete(`http://localhost:8000/delete/${idToDelete}`)
		.then(() => {
			setSources((prevSources) =>
				prevSources.filter((source) => source.id !== idToDelete)
			);
		})
		.catch((error) => {
			console.error('Error deleting source:', error);
		});
	};

  return (
    <div className="app">
      <div className="header">
    		<img src="https://clubs-cu.s3.amazonaws.com/Spectator+Publishing+Logo.png" alt="spectator logo" width="263" height="55"></img>
      </div>

			<div className="main-container">
      	<h1>Spectator's Sources</h1>

        <div className="source-form">
						<p className="input-text">Source Name:</p>
						<input type="text" className="input-box" style={{fontFamily: 'Poppins', fontSize: "18px"}} value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
						<p className="input-text">Source Email:</p>
						<input type="text" className="input-box" style={{fontFamily: 'Poppins', fontSize: "18px"}} value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
						<Button
							label = "ADD"
							type = "add-button"
							onClick={handleAddSource}/>
							
				</div>

            <div className="sources-list">
				{sources.map((source, index) => (
					<SourceItem
						key={source.id}
						itemNumber={index+1}
						itemSource={source.name}
						itemEmail={source.email}
						onDelete={() => handleDeleteSource(source.id)}
					/>
				))}
            </div>
        </div>


    </div>
  );
}

export default App;
