import { LevelContext } from "../LevelContext";

export default function Section({
  children,
  level,
}: {
  level: number;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
