import GithubActivity from "./GithubActivity";

import { motion } from "framer-motion";

const Calendar = () => {


    return (

        <motion.div className="github_Calendar"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
        >
            <GithubActivity />
        </motion.div>
    )
}

export default Calendar;