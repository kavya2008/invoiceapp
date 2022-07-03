export default function Notes({ notes }) {
    return (
      <>
        <section className="notes">
          <h3>Additional notes</h3>
          <p className="note">{notes}</p>
        </section>
      </>
    )
  }