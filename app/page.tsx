"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay }}>{children}</motion.div>;
}

const menu = {
  한상: [
    { name: "담 한정식", price: "65,000", desc: "제철 나물, 구이, 찜, 국, 전 8가지 구성", badge: "대표" },
    { name: "채식 한정식", price: "55,000", desc: "사찰 음식 기반 채식 구성", badge: "비건" },
  ],
  단품: [
    { name: "한우 갈비찜", price: "42,000", desc: "국내산 한우 단갈비, 밤, 대추, 당면" },
    { name: "간장 게장 정식", price: "38,000", desc: "양념 간장 게장, 밥, 국, 밑반찬" },
    { name: "삼겹 보쌈", price: "32,000", desc: "수육, 김치, 굴, 새우젓, 보쌈 김치" },
    { name: "모던 비빔밥", price: "22,000", desc: "제철 나물, 유기농 달걀, 참기름" },
  ],
  주류: [
    { name: "전통 막걸리", price: "8,000", desc: "지역 양조장 생막걸리" },
    { name: "한국 와인 페어링", price: "35,000", desc: "코스별 3잔 페어링" },
    { name: "전통주 모둠", price: "28,000", desc: "약주, 청주, 과실주 3종" },
  ],
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [tab, setTab] = useState<"한상" | "단품" | "주류">("한상");
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

  const serif = { fontFamily: "'Noto Serif KR',serif" };

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "1.3rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: scrolled ? "rgba(248,244,239,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid var(--border)" : "none", transition: "all 0.4s" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ ...serif, fontSize: "1.6rem", fontWeight: 400, color: "var(--brown)" }}>담</div>
          <div style={{ width: 1, height: 20, background: "var(--border)" }} />
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "var(--muted)" }}>Modern Korean</div>
        </div>
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
          {[["메뉴", "#menu"], ["소개", "#about"], ["예약", "#reservation"], ["오시는길", "#location"]].map(([l, h]) => (
            <li key={l}><a href={h} style={{ fontSize: "0.82rem", textDecoration: "none", color: "var(--muted)", letterSpacing: "0.05em" }}>{l}</a></li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1.2fr 1fr" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "8rem 5rem 4rem" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
            <div style={{ width: 30, height: 1, background: "var(--terracotta)" }} />
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "var(--terracotta)", textTransform: "uppercase" }}>Modern Korean Cuisine</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
            style={{ ...serif, fontSize: "clamp(3.5rem,6.5vw,6rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            한식의 정수,<br /><em style={{ color: "var(--terracotta)" }}>담다.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--muted)", maxWidth: 400, marginBottom: "3rem" }}>
            수백 년 이어온 한식의 정통성 위에 현대적 감각을 더했습니다. 제철 식재료로 빚는 계절의 맛.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.85 }} style={{ display: "flex", gap: "1rem" }}>
            <a href="#reservation" style={{ display: "inline-block", background: "var(--brown)", color: "#fff", padding: "0.9rem 2.2rem", fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.05em" }}>예약하기</a>
            <a href="#menu" style={{ display: "inline-block", border: "1px solid var(--border)", color: "var(--muted)", padding: "0.9rem 2.2rem", fontSize: "0.85rem", textDecoration: "none" }}>메뉴 보기</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.3 }}
          style={{ background: "var(--surface)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "3rem" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#d4b89620,#e8d5b840)" }} />
          <div style={{ position: "absolute", top: "4rem", right: "3rem", ...serif, fontSize: "8rem", color: "rgba(107,66,38,0.06)", fontWeight: 400, lineHeight: 1 }}>담</div>
          <div style={{ position: "relative", zIndex: 2, display: "flex", gap: "1.5rem" }}>
            {[["제철", "계절 식재료"], ["전통", "정통 조리법"], ["정성", "손맛 요리"]].map(([t, s]) => (
              <div key={t} style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(8px)", padding: "1rem", flex: 1, textAlign: "center" }}>
                <div style={{ ...serif, fontSize: "1.1rem", color: "var(--brown)", marginBottom: "0.3rem" }}>{t}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--muted)" }}>{s}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ background: "var(--dark)", padding: "8rem 4rem" }}>
        <FadeUp>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <div style={{ ...serif, fontSize: "0.8rem", color: "var(--terracotta)", marginBottom: "0.5rem" }}>차림표</div>
              <h2 style={{ ...serif, fontSize: "clamp(2.5rem,4vw,3.5rem)", color: "#f5ede0", fontWeight: 300 }}>메뉴</h2>
            </div>
            <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>계절마다 바뀝니다</span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: "3.5rem" }}>
            {(["한상", "단품", "주류"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.75rem 2rem", background: "none", border: "none", borderBottom: tab === t ? "2px solid var(--terracotta)" : "2px solid transparent", color: tab === t ? "#f5ede0" : "rgba(255,255,255,0.3)", fontSize: "0.85rem", cursor: "pointer", marginBottom: "-1px", ...serif, fontWeight: 300, transition: "all 0.3s", letterSpacing: "0.05em" }}>
                {t}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {menu[tab].map(item => (
              <div key={item.name} style={{ background: "var(--dark)", padding: "2rem 2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ ...serif, fontSize: "1.1rem", color: "#f5ede0", fontWeight: 300 }}>{item.name}</span>
                    {"badge" in item && item.badge && (
                      <span style={{ background: "var(--terracotta)", color: "#fff", fontSize: "0.6rem", padding: "0.15rem 0.5rem", letterSpacing: "0.05em" }}>{item.badge}</span>
                    )}
                  </div>
                  <span style={{ color: "var(--terracotta)", fontSize: "0.9rem", marginLeft: "1rem", whiteSpace: "nowrap" }}>₩{item.price}</span>
                </div>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "8rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
        <FadeUp>
          <div style={{ position: "relative" }}>
            <div style={{ background: "var(--surface)", height: 500, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg,#e8d5b0,#d4b890)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top,rgba(24,18,12,0.4),transparent)" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", ...serif, fontSize: "10rem", color: "rgba(255,255,255,0.08)", fontWeight: 400 }}>담</div>
            </div>
            <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", background: "var(--brown)", color: "#fff", padding: "1.5rem", textAlign: "center" }}>
              <div style={{ ...serif, fontSize: "1.8rem", fontWeight: 300 }}>12</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.1em", opacity: 0.7, marginTop: 2 }}>YEARS</div>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--terracotta)", textTransform: "uppercase", marginBottom: "1.5rem" }}>우리 이야기</div>
          <h2 style={{ ...serif, fontSize: "clamp(2rem,3vw,2.8rem)", fontWeight: 300, lineHeight: 1.3, marginBottom: "1.5rem" }}>
            전통의 뿌리,<br /><em style={{ color: "var(--terracotta)" }}>현대의 감각</em>
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.9, color: "var(--muted)", marginBottom: "1.5rem" }}>
            12년간 국내 유명 한식당에서 수련한 셰프가 전통 조리법을 바탕으로 현대적으로 재해석한 한식을 선보입니다.
          </p>
          <div style={{ border: "1px dashed var(--border)", padding: "1.5rem", textAlign: "center", fontSize: "0.8rem", color: "var(--muted)" }}>[ 소개 내용 입력 공간 ]</div>
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2rem" }}>
            {[["100%", "국내산 식재료"], ["0", "인공 조미료"], ["24", "첩 반찬"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ ...serif, fontSize: "2rem", fontWeight: 300, color: "var(--brown)" }}>{n}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.3rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* RESERVATION */}
      <section id="reservation" style={{ background: "var(--surface)", padding: "8rem 4rem", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 650, margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ ...serif, fontSize: "0.85rem", color: "var(--terracotta)", marginBottom: "1rem" }}>예약</div>
              <h2 style={{ ...serif, fontSize: "clamp(2.5rem,4vw,3.5rem)", fontWeight: 300 }}>자리를 잡으세요</h2>
              <div style={{ width: 40, height: 1, background: "var(--terracotta)", margin: "1.5rem auto 0" }} />
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[["이름", "text", "홍길동"], ["연락처", "tel", "010-0000-0000"], ["날짜", "date", ""], ["인원", "text", "2명"]].map(([l, t, p]) => (
                <div key={l} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ fontSize: "0.72rem", letterSpacing: "0.1em", color: "var(--muted)" }}>{l}</label>
                  <input type={t} placeholder={p} style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)", padding: "0.85rem 1rem", fontFamily: "'Noto Sans KR',sans-serif", fontSize: "0.9rem", outline: "none", colorScheme: "light" }} />
                </div>
              ))}
              <div style={{ gridColumn: "1/-1", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.72rem", letterSpacing: "0.1em", color: "var(--muted)" }}>특이사항 (알레르기, 기념일, 단체 등)</label>
                <textarea rows={3} style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)", padding: "0.85rem 1rem", fontFamily: "'Noto Sans KR',sans-serif", fontSize: "0.9rem", outline: "none", resize: "none" }} />
              </div>
              <button type="submit" style={{ gridColumn: "1/-1", padding: "1.1rem", background: "var(--brown)", color: "#fff", border: "none", fontFamily: "'Noto Serif KR',serif", fontSize: "0.95rem", letterSpacing: "0.1em", cursor: "pointer", transition: "opacity 0.3s" }}>
                {submitted ? "예약 완료 ✓" : "예약 신청하기"}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" style={{ padding: "8rem 4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <FadeUp>
          <div style={{ ...serif, fontSize: "0.85rem", color: "var(--terracotta)", marginBottom: "1.5rem" }}>오시는 길</div>
          <h2 style={{ ...serif, fontSize: "clamp(2rem,3vw,2.8rem)", fontWeight: 300, marginBottom: "2.5rem" }}>찾아오세요</h2>
          {[{ l: "주소", v: "서울 어딘가\n조용한 골목 안" }, { l: "영업시간", v: "화 – 일  11:30 – 21:30\n월요일 정기 휴무" }, { l: "예약 문의", v: "02-000-0000" }].map(({ l, v }) => (
            <div key={l} style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: "0.5rem" }}>{l}</div>
              <div style={{ ...serif, fontSize: "1rem", fontWeight: 300, lineHeight: 1.7, whiteSpace: "pre-line" }}>{v}</div>
            </div>
          ))}
        </FadeUp>
        <FadeUp delay={0.2}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", height: 400, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg,#e8d5b015,transparent)" }} />
            <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
              <div style={{ ...serif, fontSize: "3.5rem", fontWeight: 300, color: "var(--brown)", lineHeight: 1, marginBottom: "0.5rem" }}>담</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>Modern Korean · Seoul</div>
            </div>
          </div>
        </FadeUp>
      </section>

      <footer style={{ background: "var(--dark)", padding: "2.5rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ ...serif, fontSize: "1.3rem", fontWeight: 300, color: "var(--terracotta)" }}>담</div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>© 2024 담 Modern Korean · Seoul</div>
      </footer>
    </>
  );
}
