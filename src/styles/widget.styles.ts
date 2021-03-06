import styled from "styled-components";

export const logoSrc =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OTUgNDk1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTUgNDk1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0U1MjYzMTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NzMuNzIsNDk1LjVIMjIuMjhjLTExLjk4LDAtMjEuNzgtOS44LTIxLjc4LTIxLjc4VjIyLjI4QzAuNSwxMC4zLDEwLjMsMC41LDIyLjI4LDAuNWg0NTEuNDQKCWMxMS45OCwwLDIxLjc4LDkuOCwyMS43OCwyMS43OHY0NTEuNDRDNDk1LjUsNDg1LjY5LDQ4NS43LDQ5NS41LDQ3My43Miw0OTUuNXoiLz4KPGcgaWQ9IkNPTUlDX1JFTElFRl8tX29wdGljYWxfdHdlYWsiPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTg1LjY5LDIwMy41MmMwLDEwLjc3LDEuMzUsMTcuNyw5LjYyLDE3LjdzOS42Mi02LjkyLDkuNjItMTcuN3YtMTMuMDhoMjcuNXY1LjU4CgkJYzAsMjguMjctOS4wNCw0OC4wOC0zNi41NCw0OC4wOGMtMjguMjcsMC0zOS4yNC0xOS4wNC0zOS4yNC01My44NXYtMTYuNTRjMC0zNC44MSwxMC45Ni01My44NSwzOS4yNC01My44NQoJCWMyNy41LDAsMzYuNTQsMTkuODEsMzYuNTQsNDguMDh2NS41OGgtMjcuNXYtMTMuMDhjMC0xMC43Ny0xLjM1LTE3LjctOS42Mi0xNy43cy05LjYyLDYuOTItOS42MiwxNy43VjIwMy41MnoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMTYuMjEsMTg5LjQ4YzAsMzQuODEtMTAuOTYsNTQuNjItMzkuMjQsNTQuNjJjLTI4LjI3LDAtMzkuMjQtMTkuODEtMzkuMjQtNTQuNjJ2LTE1CgkJYzAtMzQuODEsMTAuOTYtNTQuNjIsMzkuMjQtNTQuNjJjMjguMjcsMCwzOS4yNCwxOS44MSwzOS4yNCw1NC42MlYxODkuNDh6IE0xNjYuOTcsMjAzLjEzYzAsMTAuNzcsMS43MywxOC4wOCwxMCwxOC4wOAoJCXMxMC03LjMxLDEwLTE4LjA4di00Mi4zMWMwLTEwLjc3LTEuNzMtMTguMDgtMTAtMTguMDhzLTEwLDcuMzEtMTAsMTguMDhWMjAzLjEzeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI3MS4zMiwxODIuOTRoMC43N2wxMS41NC02MS41NWgzNS41OHYxMjEuMTdoLTI2LjE2di02OS4wNWgtMC43N2wtMTMuMjcsNjkuMDVoLTE3LjdsLTEzLjY2LTY5LjA1aC0wLjc3CgkJdjY5LjA1aC0yNC44MVYxMjEuMzloMzYuMzVMMjcxLjMyLDE4Mi45NHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNTYuNDEsMTIxLjM5djEyMS4xN2gtMjguMjdWMTIxLjM5SDM1Ni40MXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zOTIuMzksMjAzLjUyYzAsMTAuNzcsMS4zNSwxNy43LDkuNjIsMTcuN2M4LjI3LDAsOS42Mi02LjkyLDkuNjItMTcuN3YtMTMuMDhoMjcuNXY1LjU4CgkJYzAsMjguMjctOS4wNCw0OC4wOC0zNi41NCw0OC4wOGMtMjguMjcsMC0zOS4yNC0xOS4wNC0zOS4yNC01My44NXYtMTYuNTRjMC0zNC44MSwxMC45Ni01My44NSwzOS4yNC01My44NQoJCWMyNy41LDAsMzYuNTQsMTkuODEsMzYuNTQsNDguMDh2NS41OGgtMjcuNXYtMTMuMDhjMC0xMC43Ny0xLjM1LTE3LjctOS42Mi0xNy43Yy04LjI3LDAtOS42Miw2LjkyLTkuNjIsMTcuN1YyMDMuNTJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTA1LjEyLDM3NC42M2MtMS41NC00LjYyLTEuOTItMTEuNzMtMi42OS0yNi4zNWMtMC41OC0xMS41NC0zLjQ2LTE3LjUtMTIuMzEtMTcuNWgtMy42NXY0My44NUg1OC41N1YyNTMuNDYKCQloMzQuODFjMjcuMTIsMCwzOS4yNCwxNC4yMywzOS4yNCwzNS43N2MwLDE5LjA0LTguNjYsMjguNDctMjAuOTcsMzAuNThjMTIuNjksMi44OCwxNi45MywxMS45MiwxNy44OSwyNy4xMgoJCWMwLjk2LDE1Ljk2LDAuNzcsMjIuMTIsMy40NiwyNy43SDEwNS4xMnogTTg5LjE2LDMwOC40NmMxMS4zNSwwLDE1Ljc3LTMuNjUsMTUuNzctMTUuOTZjMC0xMC45Ni00LjQyLTE2LjM1LTE1Ljc3LTE2LjM1aC0yLjY5CgkJdjMyLjMxSDg5LjE2eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIwMC40MiwzNzQuNjNoLTYxLjM2VjI1My40Nmg2MS4zNnYyMy4yN2gtMzMuNjZ2MjQuODFoMjV2MjMuMDhoLTI1djI2Ljc0aDMzLjY2VjM3NC42M3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMzUuMjcsMjUzLjQ2djk3LjloMzIuN3YyMy4yN0gyMDdWMjUzLjQ2SDIzNS4yN3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMDEuNTMsMjUzLjQ2djEyMS4xN2gtMjguMjdWMjUzLjQ2SDMwMS41M3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNzEuNiwzNzQuNjNoLTYxLjM2VjI1My40Nmg2MS4zNnYyMy4yN2gtMzMuNjZ2MjQuODFoMjV2MjMuMDhoLTI1djI2Ljc0aDMzLjY2VjM3NC42M3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNzguMTgsMzc0LjYzVjI1My40Nmg1OS4wNXYyMy4yN2gtMzAuNzd2MjguMDhoMjIuNXYyMi44OWgtMjIuNXY0Ni45M0gzNzguMTh6Ii8+CjwvZz4KPC9zdmc+Cg==";
const red = "#e53138";
const redDark = "#7b0f13";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #e2e2e2;
    align-items: stretch;
    flex-direction: column;
    padding: 2rem;
    margin: 2rem;
    width: 50%;
    max-width: 50rem;
    border-radius: 5px;

    label {
      div {
        display: flex;

        input {
          max-width: unset;
        }
      }
    }

    .logo-wrapper {
      align-self: center;
    }

    .response-message {
      font-family: sans-serif;
      font-size: 2rem;
      color: #fff;
      font-weight: 700;
    }
  }
`;
