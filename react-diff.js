import react from "react";

function Component(props) {
	return (
		<>
			<div>
				<Counter />
			</div>

			<span>
				<Counter />
			</span>

			<ul>
				<li>first</li>
				<li>second</li>
			</ul>

			<ul>
				<li>first</li>
				<li>second</li>
				<li>third</li>
			</ul>

			<ul>
				<li>Duke</li>
				<li>Villanova</li>
			</ul>

			<ul>
				<li>Connecticut</li>
				<li>Duke</li>
				<li>Villanova</li>
			</ul>

			<ul>
				<li key="2015">Duke</li>
				<li key="2016">Villanova</li>
			</ul>

			<ul>
				<li key="2014">Connecticut</li>
				<li key="2015">Duke</li>
				<li key="2016">Villanova</li>
			</ul>
		</>
	);
}
