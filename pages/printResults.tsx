import Navbar  from "../components/Navbar";
//import Sidebar from "../components/Sidebar"
const viewResults = () => {
    return(
        <div>
            <div>
            <Navbar/>
            </div>
            <div>
              <main>
                <section className="py-5 text-center container">
                  <div className="row py-lg-5">
                     <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Print Results</h1>
                     </div> 
                </div>
                </section>

             <div className="album py-5 bg-light">
              <div className="container">

               <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                 <div className="col">
                   <div className="card shadow-sm">
                     <img src="./agendas.jpg" alt="" width="100%" height="225" />

                    <div className="card-body">
                       <p className="card-text">Audited Financial Statements including the Balance Sheet for the year ended 31st December
                        2022, together with the Directors’ and Auditors’ Reports thereon be and are hereby approved and adopted.</p>
                      <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-danger">Print</button>
                    </div>
                 <small className="text-muted">9 mins</small>
              </div>
             </div>
             </div>
             </div>
             <div className="col">
                   <div className="card shadow-sm">
                     <img src="./resolution.jpg" alt="" width="100%" height="225" />

                    <div className="card-body">
                       <p className="card-text">To approve the Directors’ Remuneration Report for the period ended 31st December 2021.
                       (As required by the Companies Act, 2015, the Shareholders will be requested to vote at the meeting or in
                        advance of the meeting as set out below)</p>
                      <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-danger">Print</button>
                    </div>
                 <small className="text-muted">9 mins</small>
              </div>
             </div>
             </div>
             </div>
             <div className="col">
                   <div className="card shadow-sm">
                     <img src="./director.jpg" alt="" width="100%" height="225" />

                    <div className="card-body">
                       <p className="card-text">To elect Directors:<br></br>
                        a) Mr. Michael Joseph retires in accordance with Article 69 of the Company’s Articles of Association, and
                           being eligible, offers himself for re-election. <br />
                        b) Mr. John Ngumi retires in accordance with Article 69 of the Company’s Articles of Association, and being
                           eligible, offers himself for re-election. <br />
                        c) Ms. Esther Koimett retires in accordance with Article 69 of the Company’s Articles of Association and
                           does not offer herself for re-election. <br />
                        d) Mr. Angus John Clarke having been appointed in accordance with Article 67 of the Company’s Articles
                           of Association, retires in accordance with Article 69(2)(i) of the Company’s Articles of Association, and
                           being eligible, offers himself for election.</p>
                      <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-danger">Print</button>
                    </div>
                 <small className="text-muted">9 mins</small>
              </div>
             </div>
             </div>
             </div>
          
          
      </div>
    </div>
  </div>

</main>
</div>
</div>
    )
}
export default viewResults;