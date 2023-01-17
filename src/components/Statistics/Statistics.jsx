export default function Statistics({ title, stats }) {
    return(
        <section className="statistics">
            {title && <h2 title={title}>{title} </h2>}
        {/* <h2 className="title">Upload stats</h2> */}
        <ul className="stat-list">
        {<Item stats={stats} />}

        </ul>
      </section>
)}

function Item({ stats }) {
    return ( 
        stats.map(stat => {
        return ( <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li> )
}))
}