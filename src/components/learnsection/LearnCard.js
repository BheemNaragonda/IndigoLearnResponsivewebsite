import React from 'react'

export default function LearnCard() {
  return (
    <div className="card">
  <div className="card-header text-white headermenu">
  Knowledge Level
  </div>
  <div className="card-body">
    <ul className="list-group p-5">
      <li className="list-grou">Business and Technology (BT)</li>
      <li className="list-grou">Management Accounting (MA)</li>
      <li className="list-grou">Financial Accounting (FA)</li>
    </ul>
  </div>
  <div className="card-footer text-center headermenu text-white">
    3 papers
  </div>
</div>
  )
}
