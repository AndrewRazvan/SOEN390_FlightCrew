import { StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
  loadingOverlay: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: COLORS.overlayWhite,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: COLORS.textPrimary,
  },
  errorOverlay: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: COLORS.overlayError,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  errorText: {
    color: COLORS.white,
    fontSize: 14,
    textAlign: "center",
  },
});

export default styles;
