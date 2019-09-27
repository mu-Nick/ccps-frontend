import React from 'react'

const ViewComplaint = ({ complaint }) => {
	return (
		<>
			<article class='center mw5 mw6-ns hidden ba mv4'>
				<h1 class='f4 bg-near-black white mv0 pv2 ph3'>{complaint.subject}</h1>
				<h1 class='f4 bg-near-black white mv0 pv2 ph3'>{complaint.deptid}</h1>
				<div class='pa3 bt'>
					<p class='f6 f5-ns lh-copy measure mv0'>{complaint.description}</p>
				</div>
			</article>
		</>
	)
}

export default ViewComplaint
