import React from "react"
import {Fragment} from "react"
import {
    Category,
    Component,
    Variant,
    Palette,
} from "@react-buddy/ide-toolbox"
import MUIPalette from "@react-buddy/palette-mui";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AppBar from "@mui/material/AppBar";
import Autocomplete, {
    AutocompleteChangeDetails,
    AutocompleteChangeReason,
    AutocompleteCloseReason, AutocompleteInputChangeReason, AutocompleteValue
} from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Backdrop, {BackdropRoot} from "@mui/material/Backdrop";
import Badge, {BadgeMark, BadgeRoot} from "@mui/material/Badge";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import ButtonBase, {TouchRippleClassKey} from "@mui/material/ButtonBase";
import ButtonGroup from "@mui/material/ButtonGroup";
import ButtonGroupButtonContext from "@mui/material/ButtonGroup/ButtonGroupButtonContext";
import ButtonGroupContext from "@mui/material/ButtonGroup/ButtonGroupContext";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import {
    ClickAwayListener,
    ContainerClasses,
    Experimental_CssVarsProvider,
    FilledInput,
    Icon, Interpolation,
    ListItem,
    ListItemSecondaryAction,
    MenuPaper,
    ModalRoot,
    NativeSelect,
    NoSsr,
    OutlinedInput,
    PopoverPaper,
    PopoverRoot,
    Portal,
    SelectChangeEvent,
    SliderMark,
    SliderMarkLabel,
    SliderRail,
    SliderRoot,
    SliderThumb,
    SliderTrack,
    SliderValueLabel,
    SpeedDialIcon,
    StackClasses,
    StepLabel,
    SvgIcon,
    TextareaAutosize,
    THEME_ID,
    TrapFocusProps, TypographyVariant, TypographyVariants, TypographyVariantsOptions, Unstable_Grid2, Unstable_TrapFocus
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContext from "@mui/material/Dialog/DialogContext";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import GlobalStyles from "@mui/material/GlobalStyles";
import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2";
import Grow from "@mui/material/Grow";
import Hidden from "@mui/material/Hidden";
import HiddenCss from "@mui/material/Hidden/HiddenCss";
import HiddenJs from "@mui/material/Hidden/HiddenJs";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListContext from "@mui/material/List/ListContext";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import MobileStepper from "@mui/material/MobileStepper";
import Modal from "@mui/material/Modal";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
import NotchedOutline from "@mui/material/OutlinedInput/NotchedOutline";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import Popper from "@mui/material/Popper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import RadioGroupContext from "@mui/material/RadioGroup/RadioGroupContext";
import Rating from "@mui/material/Rating";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import SelectInput from "@mui/material/Select/SelectInput";
import Skeleton from "@mui/material/Skeleton";
import Slide from "@mui/material/Slide";
import Slider from "@mui/material/Slider";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepConnector from "@mui/material/StepConnector";
import StepContent from "@mui/material/StepContent";
import StepContext from "@mui/material/Step/StepContext";
import StepIcon from "@mui/material/StepIcon";
import Stepper from "@mui/material/Stepper";
import StepperContext from "@mui/material/Stepper/StepperContext";
import StyledEngineProvider from "@mui/styled-engine/StyledEngineProvider";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Switch from "@mui/material/Switch";
import SwitchBase from "@mui/material/internal/SwitchBase";
import Tab from "@mui/material/Tab";
import TabScrollButton from "@mui/material/TabScrollButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableContext from "@mui/material/Table/TableContext";
import Tablelvl2Context from "@mui/material/Table/Tablelvl2Context";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";
import BounceLoader from "react-spinners/BounceLoader";
import CircleLoader from "react-spinners/CircleLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ClipLoader from "react-spinners/ClipLoader";
import ClockLoader from "react-spinners/ClockLoader";
import DotLoader from "react-spinners/DotLoader";
import FadeLoader from "react-spinners/FadeLoader";
import GridLoader from "react-spinners/GridLoader";
import HashLoader from "react-spinners/HashLoader";
import MoonLoader from "react-spinners/MoonLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import PuffLoader from "react-spinners/PuffLoader";
import PulseLoader from "react-spinners/PulseLoader";
import RingLoader from "react-spinners/RingLoader";
import RiseLoader from "react-spinners/RiseLoader";
import RotateLoader from "react-spinners/RotateLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import SkewLoader from "react-spinners/SkewLoader";
import SquareLoader from "react-spinners/SquareLoader";
import SyncLoader from "react-spinners/SyncLoader";
import {CSS, DefaultTheme, SupportedHTMLElements} from "styled-components/dist/types";
import {EMPTY_OBJECT} from "styled-components/dist/utils/empties";
import _default from "styled-components/dist/utils/domElements";
import {
    IStyleSheetContext,
    IStyleSheetManager, IStylisContext, StyleSheetConsumer, StyleSheetContext, StyleSheetManager,
    StylisConsumer,
    StylisContext
} from "styled-components/dist/models/StyleSheetManager";
import {ServerStyleSheet, ThemeConsumer, ThemeContext} from "styled-components";
import ThemeProvider from "styled-components/dist/models/ThemeProvider";
import {CacheProvider, ClassNames, ComponentSelector, Global} from "@emotion/react";
import {JSX} from "@emotion/react/dist/declarations/types/jsx-dev-runtime";
import Carousel from "react-responsive-carousel/lib/ts/components/Carousel";
import Thumbs from "react-responsive-carousel/lib/ts/components/Thumbs";
import ReactTyped from "react-typed";
import {useInitial} from "./useInitial";
import reportWebVitals from "../reportWebVitals";
import App from "../App";
import ContactSection from "../Sections/ContactSection";
import AboutSection from "../Sections/AboutSection";
import ServicesSection from "../Sections/ServicesSection";
import GallerySection from "../Sections/GallerySection";
import SkillsSection from "../Sections/SkillsSection";
import TeamSection from "../Sections/TeamSection";
import {SectionHome} from "../Sections/SectionHeader";
import FooterSection from "../Sections/FooterSection";
import ProjectsSection from "../Sections/ProjectsSection";
import DrawerComponent from "../Drawer/DrawerComponent";
import ChatBotComponent from "../ChatBot/ChatBot";

export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
            </Component>
            <Component name="Accordion">
                <Variant>
                    <Accordion/>
                </Variant>
            </Component>
            <Component name="AccordionActions">
                <Variant>
                    <AccordionActions/>
                </Variant>
            </Component>
            <Component name="AccordionDetails">
                <Variant>
                    <AccordionDetails/>
                </Variant>
            </Component>
            <Component name="AccordionSummary">
                <Variant>
                    <AccordionSummary/>
                </Variant>
            </Component>
            <Component name="Alert">
                <Variant>
                    <Alert/>
                </Variant>
            </Component>
            <Component name="AlertTitle">
                <Variant>
                    <AlertTitle/>
                </Variant>
            </Component>
            <Component name="AppBar">
                <Variant>
                    <AppBar/>
                </Variant>
            </Component>
            <Component name="Autocomplete">
                <Variant>
                    <Autocomplete/>
                </Variant>
            </Component>
            <Component name="AutocompleteChangeDetails">
                <Variant>
                    <AutocompleteChangeDetails/>
                </Variant>
            </Component>
            <Component name="AutocompleteChangeReason">
                <Variant>
                    <AutocompleteChangeReason/>
                </Variant>
            </Component>
            <Component name="AutocompleteCloseReason">
                <Variant>
                    <AutocompleteCloseReason/>
                </Variant>
            </Component>
            <Component name="AutocompleteInputChangeReason">
                <Variant>
                    <AutocompleteInputChangeReason/>
                </Variant>
            </Component>
            <Component name="AutocompleteValue">
                <Variant>
                    <AutocompleteValue/>
                </Variant>
            </Component>
            <Component name="Avatar">
                <Variant>
                    <Avatar/>
                </Variant>
            </Component>
            <Component name="AvatarGroup">
                <Variant>
                    <AvatarGroup/>
                </Variant>
            </Component>
            <Component name="Backdrop">
                <Variant>
                    <Backdrop/>
                </Variant>
            </Component>
            <Component name="BackdropRoot">
                <Variant>
                    <BackdropRoot/>
                </Variant>
            </Component>
            <Component name="Badge">
                <Variant>
                    <Badge/>
                </Variant>
            </Component>
            <Component name="BadgeMark">
                <Variant>
                    <BadgeMark/>
                </Variant>
            </Component>
            <Component name="BadgeRoot">
                <Variant>
                    <BadgeRoot/>
                </Variant>
            </Component>
            <Component name="BottomNavigation">
                <Variant>
                    <BottomNavigation/>
                </Variant>
            </Component>
            <Component name="BottomNavigationAction">
                <Variant>
                    <BottomNavigationAction/>
                </Variant>
            </Component>
            <Component name="Box">
                <Variant>
                    <Box/>
                </Variant>
            </Component>
            <Component name="Breadcrumbs">
                <Variant>
                    <Breadcrumbs/>
                </Variant>
            </Component>
            <Component name="Button">
                <Variant>
                    <Button/>
                </Variant>
            </Component>
            <Component name="ButtonBase">
                <Variant>
                    <ButtonBase/>
                </Variant>
            </Component>
            <Component name="ButtonGroup">
                <Variant>
                    <ButtonGroup/>
                </Variant>
            </Component>
            <Component name="ButtonGroupButtonContext">
                <Variant>
                    <ButtonGroupButtonContext/>
                </Variant>
            </Component>
            <Component name="ButtonGroupContext">
                <Variant>
                    <ButtonGroupContext/>
                </Variant>
            </Component>
            <Component name="Card">
                <Variant>
                    <Card/>
                </Variant>
            </Component>
            <Component name="CardActionArea">
                <Variant>
                    <CardActionArea/>
                </Variant>
            </Component>
            <Component name="CardActions">
                <Variant>
                    <CardActions/>
                </Variant>
            </Component>
            <Component name="CardContent">
                <Variant>
                    <CardContent/>
                </Variant>
            </Component>
            <Component name="CardHeader">
                <Variant>
                    <CardHeader/>
                </Variant>
            </Component>
            <Component name="CardMedia">
                <Variant>
                    <CardMedia/>
                </Variant>
            </Component>
            <Component name="Chip">
                <Variant>
                    <Chip/>
                </Variant>
            </Component>
            <Component name="CircularProgress">
                <Variant>
                    <CircularProgress/>
                </Variant>
            </Component>
            <Component name="ClickAwayListener">
                <Variant>
                    <ClickAwayListener/>
                </Variant>
            </Component>
            <Component name="Collapse">
                <Variant>
                    <Collapse/>
                </Variant>
            </Component>
            <Component name="Container">
                <Variant>
                    <Container/>
                </Variant>
            </Component>
            <Component name="ContainerClasses">
                <Variant>
                    <ContainerClasses/>
                </Variant>
            </Component>
            <Component name="CssBaseline">
                <Variant>
                    <CssBaseline/>
                </Variant>
            </Component>
            <Component name="Dialog">
                <Variant>
                    <Dialog/>
                </Variant>
            </Component>
            <Component name="DialogActions">
                <Variant>
                    <DialogActions/>
                </Variant>
            </Component>
            <Component name="DialogContent">
                <Variant>
                    <DialogContent/>
                </Variant>
            </Component>
            <Component name="DialogContentText">
                <Variant>
                    <DialogContentText/>
                </Variant>
            </Component>
            <Component name="DialogContext">
                <Variant>
                    <DialogContext/>
                </Variant>
            </Component>
            <Component name="DialogTitle">
                <Variant>
                    <DialogTitle/>
                </Variant>
            </Component>
            <Component name="Divider">
                <Variant>
                    <Divider/>
                </Variant>
            </Component>
            <Component name="Drawer">
                <Variant>
                    <Drawer/>
                </Variant>
            </Component>
            <Component name="Experimental_CssVarsProvider">
                <Variant>
                    <Experimental_CssVarsProvider/>
                </Variant>
            </Component>
            <Component name="Fab">
                <Variant>
                    <Fab/>
                </Variant>
            </Component>
            <Component name="Fade">
                <Variant>
                    <Fade/>
                </Variant>
            </Component>
            <Component name="FilledInput">
                <Variant>
                    <FilledInput/>
                </Variant>
            </Component>
            <Component name="FormControl">
                <Variant>
                    <FormControl/>
                </Variant>
            </Component>
            <Component name="FormControlContext">
                <Variant>
                    <FormControlContext/>
                </Variant>
            </Component>
            <Component name="FormControlLabel">
                <Variant>
                    <FormControlLabel/>
                </Variant>
            </Component>
            <Component name="FormGroup">
                <Variant>
                    <FormGroup/>
                </Variant>
            </Component>
            <Component name="FormHelperText">
                <Variant>
                    <FormHelperText/>
                </Variant>
            </Component>
            <Component name="FormLabel">
                <Variant>
                    <FormLabel/>
                </Variant>
            </Component>
            <Component name="GlobalStyles">
                <Variant>
                    <GlobalStyles/>
                </Variant>
            </Component>
            <Component name="Grid">
                <Variant>
                    <Grid/>
                </Variant>
            </Component>
            <Component name="Grid2">
                <Variant>
                    <Grid2/>
                </Variant>
            </Component>
            <Component name="Grow">
                <Variant>
                    <Grow/>
                </Variant>
            </Component>
            <Component name="Hidden">
                <Variant>
                    <Hidden/>
                </Variant>
            </Component>
            <Component name="HiddenCss">
                <Variant>
                    <HiddenCss/>
                </Variant>
            </Component>
            <Component name="HiddenJs">
                <Variant>
                    <HiddenJs/>
                </Variant>
            </Component>
            <Component name="Icon">
                <Variant>
                    <Icon/>
                </Variant>
            </Component>
            <Component name="IconButton">
                <Variant>
                    <IconButton/>
                </Variant>
            </Component>
            <Component name="ImageList">
                <Variant>
                    <ImageList/>
                </Variant>
            </Component>
            <Component name="ImageListItem">
                <Variant>
                    <ImageListItem/>
                </Variant>
            </Component>
            <Component name="ImageListItemBar">
                <Variant>
                    <ImageListItemBar/>
                </Variant>
            </Component>
            <Component name="InputAdornment">
                <Variant>
                    <InputAdornment/>
                </Variant>
            </Component>
            <Component name="InputBase">
                <Variant>
                    <InputBase/>
                </Variant>
            </Component>
            <Component name="InputLabel">
                <Variant>
                    <InputLabel/>
                </Variant>
            </Component>
            <Component name="LinearProgress">
                <Variant>
                    <LinearProgress/>
                </Variant>
            </Component>
            <Component name="Link">
                <Variant>
                    <Link/>
                </Variant>
            </Component>
            <Component name="List">
                <Variant>
                    <List/>
                </Variant>
            </Component>
            <Component name="ListContext">
                <Variant>
                    <ListContext/>
                </Variant>
            </Component>
            <Component name="ListItem">
                <Variant>
                    <ListItem/>
                </Variant>
            </Component>
            <Component name="ListItemAvatar">
                <Variant>
                    <ListItemAvatar/>
                </Variant>
            </Component>
            <Component name="ListItemButton">
                <Variant>
                    <ListItemButton/>
                </Variant>
            </Component>
            <Component name="ListItemIcon">
                <Variant>
                    <ListItemIcon/>
                </Variant>
            </Component>
            <Component name="ListItemSecondaryAction">
                <Variant>
                    <ListItemSecondaryAction/>
                </Variant>
            </Component>
            <Component name="ListItemText">
                <Variant>
                    <ListItemText/>
                </Variant>
            </Component>
            <Component name="ListSubheader">
                <Variant>
                    <ListSubheader/>
                </Variant>
            </Component>
            <Component name="Menu">
                <Variant>
                    <Menu/>
                </Variant>
            </Component>
            <Component name="MenuItem">
                <Variant>
                    <MenuItem/>
                </Variant>
            </Component>
            <Component name="MenuList">
                <Variant>
                    <MenuList/>
                </Variant>
            </Component>
            <Component name="MenuPaper">
                <Variant>
                    <MenuPaper/>
                </Variant>
            </Component>
            <Component name="MobileStepper">
                <Variant>
                    <MobileStepper/>
                </Variant>
            </Component>
            <Component name="Modal">
                <Variant>
                    <Modal/>
                </Variant>
            </Component>
            <Component name="ModalRoot">
                <Variant>
                    <ModalRoot/>
                </Variant>
            </Component>
            <Component name="NativeSelect">
                <Variant>
                    <NativeSelect/>
                </Variant>
            </Component>
            <Component name="NativeSelectInput">
                <Variant>
                    <NativeSelectInput/>
                </Variant>
            </Component>
            <Component name="NoSsr">
                <Variant>
                    <NoSsr/>
                </Variant>
            </Component>
            <Component name="NotchedOutline">
                <Variant>
                    <NotchedOutline/>
                </Variant>
            </Component>
            <Component name="OutlinedInput">
                <Variant>
                    <OutlinedInput/>
                </Variant>
            </Component>
            <Component name="Pagination">
                <Variant>
                    <Pagination/>
                </Variant>
            </Component>
            <Component name="PaginationItem">
                <Variant>
                    <PaginationItem/>
                </Variant>
            </Component>
            <Component name="Paper">
                <Variant>
                    <Paper/>
                </Variant>
            </Component>
            <Component name="Popover">
                <Variant>
                    <Popover/>
                </Variant>
            </Component>
            <Component name="PopoverPaper">
                <Variant>
                    <PopoverPaper/>
                </Variant>
            </Component>
            <Component name="PopoverRoot">
                <Variant>
                    <PopoverRoot/>
                </Variant>
            </Component>
            <Component name="Popper">
                <Variant>
                    <Popper/>
                </Variant>
            </Component>
            <Component name="Portal">
                <Variant>
                    <Portal/>
                </Variant>
            </Component>
            <Component name="Radio">
                <Variant>
                    <Radio/>
                </Variant>
            </Component>
            <Component name="RadioGroup">
                <Variant>
                    <RadioGroup/>
                </Variant>
            </Component>
            <Component name="RadioGroupContext">
                <Variant>
                    <RadioGroupContext/>
                </Variant>
            </Component>
            <Component name="Rating">
                <Variant>
                    <Rating/>
                </Variant>
            </Component>
            <Component name="ScopedCssBaseline">
                <Variant>
                    <ScopedCssBaseline/>
                </Variant>
            </Component>
            <Component name="SelectChangeEvent">
                <Variant>
                    <SelectChangeEvent/>
                </Variant>
            </Component>
            <Component name="SelectInput">
                <Variant>
                    <SelectInput/>
                </Variant>
            </Component>
            <Component name="Skeleton">
                <Variant>
                    <Skeleton/>
                </Variant>
            </Component>
            <Component name="Slide">
                <Variant>
                    <Slide/>
                </Variant>
            </Component>
            <Component name="Slider">
                <Variant>
                    <Slider/>
                </Variant>
            </Component>
            <Component name="SliderMark">
                <Variant>
                    <SliderMark/>
                </Variant>
            </Component>
            <Component name="SliderMarkLabel">
                <Variant>
                    <SliderMarkLabel/>
                </Variant>
            </Component>
            <Component name="SliderRail">
                <Variant>
                    <SliderRail/>
                </Variant>
            </Component>
            <Component name="SliderRoot">
                <Variant>
                    <SliderRoot/>
                </Variant>
            </Component>
            <Component name="SliderThumb">
                <Variant>
                    <SliderThumb/>
                </Variant>
            </Component>
            <Component name="SliderTrack">
                <Variant>
                    <SliderTrack/>
                </Variant>
            </Component>
            <Component name="SliderValueLabel">
                <Variant>
                    <SliderValueLabel/>
                </Variant>
            </Component>
            <Component name="Snackbar">
                <Variant>
                    <Snackbar/>
                </Variant>
            </Component>
            <Component name="SnackbarContent">
                <Variant>
                    <SnackbarContent/>
                </Variant>
            </Component>
            <Component name="SpeedDial">
                <Variant>
                    <SpeedDial/>
                </Variant>
            </Component>
            <Component name="SpeedDialAction">
                <Variant>
                    <SpeedDialAction/>
                </Variant>
            </Component>
            <Component name="SpeedDialIcon">
                <Variant>
                    <SpeedDialIcon/>
                </Variant>
            </Component>
            <Component name="Stack">
                <Variant>
                    <Stack/>
                </Variant>
            </Component>
            <Component name="StackClasses">
                <Variant>
                    <StackClasses/>
                </Variant>
            </Component>
            <Component name="Step">
                <Variant>
                    <Step/>
                </Variant>
            </Component>
            <Component name="StepButton">
                <Variant>
                    <StepButton/>
                </Variant>
            </Component>
            <Component name="StepConnector">
                <Variant>
                    <StepConnector/>
                </Variant>
            </Component>
            <Component name="StepContent">
                <Variant>
                    <StepContent/>
                </Variant>
            </Component>
            <Component name="StepContext">
                <Variant>
                    <StepContext/>
                </Variant>
            </Component>
            <Component name="StepIcon">
                <Variant>
                    <StepIcon/>
                </Variant>
            </Component>
            <Component name="StepLabel">
                <Variant>
                    <StepLabel/>
                </Variant>
            </Component>
            <Component name="Stepper">
                <Variant>
                    <Stepper/>
                </Variant>
            </Component>
            <Component name="StepperContext">
                <Variant>
                    <StepperContext/>
                </Variant>
            </Component>
            <Component name="StyledEngineProvider">
                <Variant>
                    <StyledEngineProvider/>
                </Variant>
            </Component>
            <Component name="SvgIcon">
                <Variant>
                    <SvgIcon/>
                </Variant>
            </Component>
            <Component name="SwipeableDrawer">
                <Variant>
                    <SwipeableDrawer/>
                </Variant>
            </Component>
            <Component name="Switch">
                <Variant>
                    <Switch/>
                </Variant>
            </Component>
            <Component name="SwitchBase">
                <Variant>
                    <SwitchBase/>
                </Variant>
            </Component>
            <Component name="THEME_ID">
                <Variant>
                    <THEME_ID/>
                </Variant>
            </Component>
            <Component name="Tab">
                <Variant>
                    <Tab/>
                </Variant>
            </Component>
            <Component name="TabScrollButton">
                <Variant>
                    <TabScrollButton/>
                </Variant>
            </Component>
            <Component name="Table">
                <Variant>
                    <Table/>
                </Variant>
            </Component>
            <Component name="TableBody">
                <Variant>
                    <TableBody/>
                </Variant>
            </Component>
            <Component name="TableCell">
                <Variant>
                    <TableCell/>
                </Variant>
            </Component>
            <Component name="TableContainer">
                <Variant>
                    <TableContainer/>
                </Variant>
            </Component>
            <Component name="TableContext">
                <Variant>
                    <TableContext/>
                </Variant>
            </Component>
            <Component name="Tablelvl2Context">
                <Variant>
                    <Tablelvl2Context/>
                </Variant>
            </Component>
            <Component name="TableFooter">
                <Variant>
                    <TableFooter/>
                </Variant>
            </Component>
            <Component name="TableHead">
                <Variant>
                    <TableHead/>
                </Variant>
            </Component>
            <Component name="TablePagination">
                <Variant>
                    <TablePagination/>
                </Variant>
            </Component>
            <Component name="TablePaginationActions">
                <Variant>
                    <TablePaginationActions/>
                </Variant>
            </Component>
            <Component name="TableRow">
                <Variant>
                    <TableRow/>
                </Variant>
            </Component>
            <Component name="TableSortLabel">
                <Variant>
                    <TableSortLabel/>
                </Variant>
            </Component>
            <Component name="Tabs">
                <Variant>
                    <Tabs/>
                </Variant>
            </Component>
            <Component name="TextField">
                <Variant>
                    <TextField/>
                </Variant>
            </Component>
            <Component name="TextareaAutosize">
                <Variant>
                    <TextareaAutosize/>
                </Variant>
            </Component>
            <Component name="ToggleButton">
                <Variant>
                    <ToggleButton/>
                </Variant>
            </Component>
            <Component name="ToggleButtonGroup">
                <Variant>
                    <ToggleButtonGroup/>
                </Variant>
            </Component>
            <Component name="Toolbar">
                <Variant>
                    <Toolbar/>
                </Variant>
            </Component>
            <Component name="Tooltip">
                <Variant>
                    <Tooltip/>
                </Variant>
            </Component>
            <Component name="TouchRipple">
                <Variant>
                    <TouchRipple/>
                </Variant>
            </Component>
            <Component name="TouchRippleClassKey">
                <Variant>
                    <TouchRippleClassKey/>
                </Variant>
            </Component>
            <Component name="TrapFocusProps">
                <Variant>
                    <TrapFocusProps/>
                </Variant>
            </Component>
            <Component name="Typography">
                <Variant>
                    <Typography/>
                </Variant>
            </Component>
            <Component name="TypographyVariant">
                <Variant>
                    <TypographyVariant/>
                </Variant>
            </Component>
            <Component name="TypographyVariants">
                <Variant>
                    <TypographyVariants/>
                </Variant>
            </Component>
            <Component name="TypographyVariantsOptions">
                <Variant>
                    <TypographyVariantsOptions/>
                </Variant>
            </Component>
            <Component name="Unstable_Grid2">
                <Variant>
                    <Unstable_Grid2/>
                </Variant>
            </Component>
            <Component name="Unstable_TrapFocus">
                <Variant>
                    <Unstable_TrapFocus/>
                </Variant>
            </Component>
            <Component name="Zoom">
                <Variant>
                    <Zoom/>
                </Variant>
            </Component>
            <Component name="BarLoader">
                <Variant>
                    <BarLoader/>
                </Variant>
            </Component>
            <Component name="BeatLoader">
                <Variant>
                    <BeatLoader/>
                </Variant>
            </Component>
            <Component name="BounceLoader">
                <Variant>
                    <BounceLoader/>
                </Variant>
            </Component>
            <Component name="CircleLoader">
                <Variant>
                    <CircleLoader/>
                </Variant>
            </Component>
            <Component name="ClimbingBoxLoader">
                <Variant>
                    <ClimbingBoxLoader/>
                </Variant>
            </Component>
            <Component name="ClipLoader">
                <Variant>
                    <ClipLoader/>
                </Variant>
            </Component>
            <Component name="ClockLoader">
                <Variant>
                    <ClockLoader/>
                </Variant>
            </Component>
            <Component name="DotLoader">
                <Variant>
                    <DotLoader/>
                </Variant>
            </Component>
            <Component name="FadeLoader">
                <Variant>
                    <FadeLoader/>
                </Variant>
            </Component>
            <Component name="GridLoader">
                <Variant>
                    <GridLoader/>
                </Variant>
            </Component>
            <Component name="HashLoader">
                <Variant>
                    <HashLoader/>
                </Variant>
            </Component>
            <Component name="MoonLoader">
                <Variant>
                    <MoonLoader/>
                </Variant>
            </Component>
            <Component name="PacmanLoader">
                <Variant>
                    <PacmanLoader/>
                </Variant>
            </Component>
            <Component name="PropagateLoader">
                <Variant>
                    <PropagateLoader/>
                </Variant>
            </Component>
            <Component name="PuffLoader">
                <Variant>
                    <PuffLoader/>
                </Variant>
            </Component>
            <Component name="PulseLoader">
                <Variant>
                    <PulseLoader/>
                </Variant>
            </Component>
            <Component name="RingLoader">
                <Variant>
                    <RingLoader/>
                </Variant>
            </Component>
            <Component name="RiseLoader">
                <Variant>
                    <RiseLoader/>
                </Variant>
            </Component>
            <Component name="RotateLoader">
                <Variant>
                    <RotateLoader/>
                </Variant>
            </Component>
            <Component name="ScaleLoader">
                <Variant>
                    <ScaleLoader/>
                </Variant>
            </Component>
            <Component name="SkewLoader">
                <Variant>
                    <SkewLoader/>
                </Variant>
            </Component>
            <Component name="SquareLoader">
                <Variant>
                    <SquareLoader/>
                </Variant>
            </Component>
            <Component name="SyncLoader">
                <Variant>
                    <SyncLoader/>
                </Variant>
            </Component>
            <Component name="CSS">
                <Variant>
                    <CSS/>
                </Variant>
            </Component>
            <Component name="EMPTY_OBJECT">
                <Variant>
                    <EMPTY_OBJECT/>
                </Variant>
            </Component>
            <Component name="_default">
                <Variant>
                    <_default/>
                </Variant>
            </Component>
            <Component name="StylisConsumer">
                <Variant>
                    <StylisConsumer/>
                </Variant>
            </Component>
            <Component name="StylisContext">
                <Variant>
                    <StylisContext/>
                </Variant>
            </Component>
            <Component name="DefaultTheme">
                <Variant>
                    <DefaultTheme/>
                </Variant>
            </Component>
            <Component name="IStyleSheetContext">
                <Variant>
                    <IStyleSheetContext/>
                </Variant>
            </Component>
            <Component name="IStyleSheetManager">
                <Variant>
                    <IStyleSheetManager/>
                </Variant>
            </Component>
            <Component name="IStylisContext">
                <Variant>
                    <IStylisContext/>
                </Variant>
            </Component>
            <Component name="ServerStyleSheet">
                <Variant>
                    <ServerStyleSheet/>
                </Variant>
            </Component>
            <Component name="StyleSheetConsumer">
                <Variant>
                    <StyleSheetConsumer/>
                </Variant>
            </Component>
            <Component name="StyleSheetContext">
                <Variant>
                    <StyleSheetContext/>
                </Variant>
            </Component>
            <Component name="StyleSheetManager">
                <Variant>
                    <StyleSheetManager/>
                </Variant>
            </Component>
            <Component name="SupportedHTMLElements">
                <Variant>
                    <SupportedHTMLElements/>
                </Variant>
            </Component>
            <Component name="ThemeConsumer">
                <Variant>
                    <ThemeConsumer/>
                </Variant>
            </Component>
            <Component name="ThemeContext">
                <Variant>
                    <ThemeContext/>
                </Variant>
            </Component>
            <Component name="ThemeProvider">
                <Variant>
                    <ThemeProvider/>
                </Variant>
            </Component>
            <Component name="CacheProvider">
                <Variant>
                    <CacheProvider/>
                </Variant>
            </Component>
            <Component name="ClassNames">
                <Variant>
                    <ClassNames/>
                </Variant>
            </Component>
            <Component name="Global">
                <Variant>
                    <Global/>
                </Variant>
            </Component>
            <Component name="JSX">
                <Variant>
                    <JSX/>
                </Variant>
            </Component>
            <Component name="ComponentSelector">
                <Variant>
                    <ComponentSelector/>
                </Variant>
            </Component>
            <Component name="Interpolation">
                <Variant>
                    <Interpolation/>
                </Variant>
            </Component>
            <Component name="Carousel">
                <Variant>
                    <Carousel/>
                </Variant>
            </Component>
            <Component name="Thumbs">
                <Variant>
                    <Thumbs/>
                </Variant>
            </Component>
            <Component name="ReactTyped">
                <Variant>
                    <ReactTyped/>
                </Variant>
            </Component>
            <Component name="useInitial">
                <Variant>
                    <useInitial/>
                </Variant>
            </Component>
            <Component name="reportWebVitals">
                <Variant>
                    <reportWebVitals/>
                </Variant>
            </Component>
            <Component name="App">
                <Variant>
                    <App/>
                </Variant>
            </Component>
            <Component name="ContactSection">
                <Variant>
                    <ContactSection/>
                </Variant>
            </Component>
            <Component name="AboutSection">
                <Variant>
                    <AboutSection/>
                </Variant>
            </Component>
            <Component name="ServicesSection">
                <Variant>
                    <ServicesSection/>
                </Variant>
            </Component>
            <Component name="GallerySection">
                <Variant>
                    <GallerySection/>
                </Variant>
            </Component>
            <Component name="SkillsSection">
                <Variant>
                    <SkillsSection/>
                </Variant>
            </Component>
            <Component name="TeamSection">
                <Variant>
                    <TeamSection/>
                </Variant>
            </Component>
            <Component name="SectionHome">
                <Variant>
                    <SectionHome/>
                </Variant>
            </Component>
            <Component name="FooterSection">
                <Variant>
                    <FooterSection/>
                </Variant>
            </Component>
            <Component name="ProjectsSection">
                <Variant>
                    <ProjectsSection/>
                </Variant>
            </Component>
            <Component name="DrawerComponent">
                <Variant>
                    <DrawerComponent/>
                </Variant>
            </Component>
            <Component name="ChatBotComponent">
                <Variant>
                    <ChatBotComponent/>
                </Variant>
            </Component>
        </Category>
        <MUIPalette/>
    </Palette>
)

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    )
}
