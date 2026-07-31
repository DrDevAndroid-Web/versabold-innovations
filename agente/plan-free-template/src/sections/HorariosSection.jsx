import { useConfig } from '../hooks/useConfig.js';

const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export default function HorariosSection() {
  const { config } = useConfig();
  const { opening_hours } = config;

  if (!opening_hours) return null;

  // Soporte para formato simple (label/sunday) y formato extendido (array de días)
  const esFormatoSimple = opening_hours.label || opening_hours.sunday;
  const esFormatoDetallado = Array.isArray(opening_hours.dias);

  return (
    <section className="section horarios" aria-labelledby="horarios-heading">
      <div className="container">
        <h2 id="horarios-heading" className="section__title">Horario de atención</h2>

        {esFormatoSimple && (
          <div className="horarios-simple">
            {opening_hours.label && (
              <p className="horarios-simple__fila">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="icon icon--sm">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {opening_hours.label}
              </p>
            )}
            {opening_hours.sunday && (
              <p className="horarios-simple__fila horarios-simple__fila--domingo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="icon icon--sm">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Domingo: {opening_hours.sunday}
              </p>
            )}
          </div>
        )}

        {esFormatoDetallado && (
          <table className="horarios-table" aria-label="Horarios por día">
            <thead className="sr-only">
              <tr><th>Día</th><th>Horario</th></tr>
            </thead>
            <tbody>
              {opening_hours.dias.map((d, i) => (
                <tr key={i} className={d.cerrado ? 'horarios-table__row--cerrado' : ''}>
                  <td className="horarios-table__dia">{DIAS[d.dia_semana ?? i] ?? `Día ${i + 1}`}</td>
                  <td className="horarios-table__hora">
                    {d.cerrado ? 'Cerrado' : `${d.abre} – ${d.cierra}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
