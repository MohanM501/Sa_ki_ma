import React,{useState} from 'react';
import axios from "axios";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    useToast,
  } from '@chakra-ui/react';


const JobPosting = () => {
    const toast = useToast();
    const [formData, setFormData] = useState({
      company: '',
      city: '',
      location: '',
      role: '',
      level: '',
      position: '',
      language: '',
      contract: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      // Show success toast
      toast({
        title: 'Job Posted',
        description: 'Your job posting has been submitted.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      const currentDate = new Date();
      const currentDateOnly = currentDate.toISOString().split('T')[0];
      formData.postedAt=currentDateOnly;
      console.log(formData,"formData");
      axios.post("http://localhost:8080/posting",formData).then((r)=>{
          alert("added Succesfully");
      })
  
    };
  
    return (
    <Box maxWidth="500px" margin="auto">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired marginBottom="4">
            <FormLabel>Company Name</FormLabel>
            <Input
              name="company"
              type="text"
              placeholder="Enter the company name"
              value={formData.company}
              onChange={handleChange}
            />
          </FormControl>
  
          <FormControl isRequired marginBottom="4">
            <FormLabel>City</FormLabel>
            <Input
              name="city"
              type="text"
              placeholder="Enter the city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormControl>
  
          <FormControl isRequired marginBottom="4">
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              type="text"
              placeholder="Enter the location"
              value={formData.location}
              onChange={handleChange}
            />
          </FormControl>
  
          <FormControl isRequired marginBottom="4">
            <FormLabel>Role</FormLabel>
            <Select
              name="role"
              placeholder="Select role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="FullStack">FullStack</option>
            </Select>
          </FormControl>
  
          <FormControl isRequired marginBottom="4">
            <FormLabel>Level</FormLabel>
            <Select
              name="level"
              placeholder="Select level"
              value={formData.level}
              onChange={handleChange}
            >
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </Select>
          </FormControl>
  
          <FormControl isRequired marginBottom="4">
            <FormLabel>Position</FormLabel>
            <Select
              name="position"
              placeholder="Select position"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="Backend Developer">Backend Developer</option>
              <option value="Junior Frontend Developer">Junior Frontend Developer</option>
             
            </Select>
          </FormControl>
          <FormControl isRequired marginBottom="4">
            <FormLabel>Languages</FormLabel>
            <Select
              name="language"
              placeholder="Select language"
              value={formData.language}
              onChange={handleChange}
            >
             <option value="JavaScript">JavaScript</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="C">C</option>
             
            </Select>
          </FormControl>
          <FormControl isRequired marginBottom="4">
            <FormLabel>Contract</FormLabel>
            <Select
              name="contract"
              placeholder="Select contract"
              value={formData.contract}
              onChange={handleChange}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="teal">Submit</Button>
        </form>
    </Box>)
}

export default JobPosting;