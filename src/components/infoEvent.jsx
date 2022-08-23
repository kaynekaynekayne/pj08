
const InfoEvent = ({details}) => {

    return (
        <div>
            {Object.keys(details).length===0 ? 
                <h2>Loading...</h2>:
            <>
                <img src={details.poster} style={{width:'300px'}} />
                <h3>{details.prfnm}</h3>
                <h4>{details.fcltynm}</h4>
                <div className="meta">
                    <p>{details.genrenm}</p>
                    <p>{`${details.prfpdfrom}-${details.prfpdto} (${details.prfstate})`}</p>
                    <p>{details.prfcast}</p>
                    <p>{details.pcseguidance}</p>
                    <p>공연시간: {details.prfruntime}</p>
                </div>
            </>
            }
        </div>
    );
};

export default InfoEvent;