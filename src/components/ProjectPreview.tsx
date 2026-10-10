import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  Zap,
} from "lucide-react";
export default function ProjectPreview({ id }: { id: string }) {
  if (id === "prediqueue")
    return (
      <div className="queue-preview" aria-hidden="true">
        <div className="queue-logo">
          <span className="queue-mark">Q</span> PrediQueue{" "}
          <span className="live-tag">● Live queue</span>
        </div>
        <div className="queue-body">
          <span>REGISTRAR'S OFFICE</span>
          <p>
            Less waiting.
            <br />
            <strong>More living.</strong>
          </p>
          <div className="ticket">
            <small>NOW SERVING</small>
            <b>A–024</b>
            <span>
              Counter 02 <span className="ticket-dot">●</span>
            </span>
          </div>
          <div className="queue-wait">
            <span>
              Next in line <b>A–025</b>
            </span>
            <span>
              Estimated wait <b>12 min</b>
            </span>
          </div>
        </div>
      </div>
    );
  const electro = id === "electrodesk";
  return (
    <div
      className={`dashboard-preview ${electro ? "electro" : ""}`}
      aria-hidden="true"
    >
      <aside className="mock-sidebar">
        <b>
          {electro ? <Zap size={14} /> : <Boxes size={14} />}{" "}
          {electro ? "ElectroDesk" : "Shawarma Shack"}
        </b>
        {["Overview", "Inventory", "Stock movement", "Reports", "Settings"].map(
          (x, i) => (
            <span className={i === 0 ? "selected" : ""} key={x}>
              {i === 0 ? (
                <LayoutDashboard size={10} />
              ) : (
                <BarChart3 size={10} />
              )}{" "}
              {x}
            </span>
          ),
        )}
        <small>Workspace / Admin</small>
      </aside>
      <div className="mock-main">
        <div className="mock-top">
          Overview{" "}
          <span>
            Search anything… <b>JC</b>
          </span>
        </div>
        <h4>{electro ? "Business overview" : "Inventory overview"}</h4>
        <p>
          Here's what's happening with your {electro ? "business" : "inventory"}{" "}
          today.
        </p>
        <div className="mock-stats">
          {(electro
            ? [
                ["Total sales", "₱128,450"],
                ["Orders", "148"],
                ["Products", "864"],
              ]
            : [
                ["Total products", "248"],
                ["Low stock", "12"],
                ["Expiring soon", "08"],
              ]
          ).map(([label, num]) => (
            <div key={label}>
              <small>{label}</small>
              <b>{num}</b>
              <em>Updated today</em>
            </div>
          ))}
        </div>
        <div className="mock-chart">
          <b>{electro ? "Sales performance" : "Stock overview"}</b>
          <span>This month ⌄</span>
          <div className="bars">
            {[35, 49, 39, 66, 53, 76, 58, 88, 70, 82, 66, 96].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="chart-labels">
            <span>01</span>
            <span>05</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
            <span>25</span>
            <span>30</span>
          </div>
        </div>
        <div className="mock-table">
          <b>{electro ? "Recent transactions" : "Recent stock activity"}</b>
          {(electro
            ? ["LED panel light", "Circuit breaker"]
            : ["Chicken shawarma", "Pita bread"]
          ).map((x, i) => (
            <div key={x}>
              <span>{x}</span>
              <span>{i ? "48" : "120"} units</span>
              <em>{electro ? "Completed" : "Fresh"}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
