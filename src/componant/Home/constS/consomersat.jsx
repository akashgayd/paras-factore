
import { motion } from "framer-motion";
const MyConstomer =()=>{


    return(
         <motion.div 
                className="bg-white py-16 px-6 md:px-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                      { number: "5+", label: "Years Experience" },
                      { number: "200+", label: "Clients Helped" },
                      { number: "15+", label: "Workshops Hosted" },
                      { number: "98%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="p-6 rounded-xl bg-gray-50 shadow-sm"
                        whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                      >
                        <motion.h3 
                          className="text-3xl md:text-4xl font-bold text-pink-600"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                        >
                          {stat.number}
                        </motion.h3>
                        <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
    )


}
export default MyConstomer