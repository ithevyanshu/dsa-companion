import { createTheme, ThemeProvider } from "@mui/material";

export const StriverDataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#eea8af",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#eea8af",
            "&:hover": {
              backgroundColor: "#eea8af",
            },
          },
        },
      },
    },
  },
});

export const BabbarDataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#b5d7f2",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#b5d7f2",
            "&:hover": {
              backgroundColor: "#b5d7f2",
            },
          },
        },
      },
    },
  },
});
export const Blind75DataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#f0cad6",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#f0cad6",
            "&:hover": {
              backgroundColor: "#f0cad6",
            },
          },
        },
      },
    },
  },
});
export const Grind169DataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#d7d2f7",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#d7d2f7",
            "&:hover": {
              backgroundColor: "#d7d2f7",
            },
          },
        },
      },
    },
  },
});
export const GfGDataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#c7dacc",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#c7dacc",
            "&:hover": {
              backgroundColor: "#c7dacc",
            },
          },
        },
      },
    },
  },
});
export const ArshDataGridTheme = createTheme({
  components: {
    //@ts-ignore - this isn't in the TS because DataGird is not exported from `@mui/material`
    MuiDataGrid: {
      styleOverrides: {
        row: {
          "&:hover": {
            backgroundColor: "#f6dbc7",
            cursor: "pointer",
          },

          "&.Mui-selected": {
            backgroundColor: "#f6dbc7",
            "&:hover": {
              backgroundColor: "#f6dbc7",
            },
          },
        },
      },
    },
  },
});
