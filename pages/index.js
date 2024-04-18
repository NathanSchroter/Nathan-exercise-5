import styles from "@/styles/Home.module.css";
import Barchart from "@/components/barCharts";
import HorizontalBarchart from "@/components/horizontalBarChart";
import PieChart from "@/components/barCharts/piechart";


export default function Home() {
  return (
    <>
  
      <main className={`${styles.main}`}>
       <Barchart/>
        <HorizontalBarchart/>
        <PieChart/>
      </main>
    </>
  );
}
