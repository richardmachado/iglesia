import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Chapter = styled.div `
width: 80%;
margin-left: 4rem;
font-weight: bold;
text-align: left; 
background-color: #f2eecb; 
`

function OldTestament () {
    const [forms, setForms] = useState([]);
    const [chapter, setChapter] = useState(1);
  const [book, setBook] = useState("GENESIS");
  

    const handleChange = event => {
      setChapter(event.target.value);
     
    };

    const handleSubmit = e => {
      setBook(e.target.value);
    };
  
  
    const options = {
        headers: {
            "x-rapidapi-key": "4ff44bf1d0mshb58109f3c94d09ep13f9adjsn37028a25638a",
            "x-rapidapi-host" : "ajith-holy-bible.p.rapidapi.com",
            "useQueryString" : "true"
          },   
    }

  function processData() {
    return forms[0].Output.split(/\s+(?=\d)/g);
  }

    useEffect(() => {
      
    axios.get(`https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?&Book=${book}&chapter=${chapter}`, options)
          .then(response => {
             setForms([response.data]);  
        })
        .catch(err => {
          console.log(err);
        });
    },[chapter, book]);
    if (!forms) {
      return <h1>Loading...</h1>;
    }
  
    return (
      <div className="forms">
  <h1>Old Testament</h1>

  <h1>  Book of {book} <br></br>Chapter : {chapter}</h1>


  <label  htmlFor="chapter">
          Select a chapter number
        <select
            name="chapter"
            type="text" 
          onChange={event => handleChange(event)}
          form="chapter">
            <option value="1">1</option> 
            <option value="2">2</option>
            <option value="3">3</option> 
            <option value="4">4</option> 
            <option value="5">5</option> 
            <option value="6">6</option> 
            <option value="7">7</option> 
            <option value="8">8</option>
            <option value="9">9</option> 
            <option value="10">10</option> 
            <option value="11">11</option> 
            <option value="12">12</option> 
            <option value="13">13</option> 
            <option value="14">14</option> 
            <option value="15">15</option> 
            <option value="16">16</option> 
            <option value="17">17</option> 
            <option value="18">18</option> 
            <option value="19">19</option> 
            <option value="20">20</option> 
            <option value="21">21</option> 
            <option value="22">22</option> 
            <option value="23">23</option> 
            <option value="24">24</option> 
            <option value="25">25</option> 
            <option value="26">26</option> 
            <option value="27">27</option> 
            <option value="28">28</option> 
            <option value="29">29</option> 
            <option value="30">30</option> 
            <option value="31">31</option> 
            <option value="32">32</option> 
            <option value="33">33</option> 
            <option value="34">34</option> 
            <option value="35">35</option> 
            <option value="36">36</option> 
            <option value="37">37</option> 
            <option value="38">38</option> 
            <option value="39">39</option> 
            <option value="40">40</option> 
            <option value="41">41</option> 
            <option value="42">42</option> 
            <option value="43">43</option> 
            <option value="44">44</option> 
            <option value="45">45</option> 
            <option value="46">46</option> 
            <option value="47">47</option> 
            <option value="48">48</option> 
            <option value="49">49</option> 
            <option value="50">50</option> 
            <option value="51">51</option> 
            <option value="52">52</option> 
            <option value="53">53</option> 
            <option value="54">54</option> 
            <option value="55">55</option> 
            <option value="56">56</option> 
            <option value="57">57</option> 
            <option value="58">58</option> 
            <option value="59">59</option> 
            <option value="60">60</option> 
            <option value="61">61</option> 
            <option value="62">62</option> 
            <option value="63">63</option> 
            <option value="64">64</option> 
            <option value="65">65</option> 
            <option value="66">66</option> 
            <option value="67">67</option> 
            <option value="68">68</option> 
            <option value="69">69</option> 
            <option value="70">70</option> 
            <option value="71">71</option> 
            <option value="72">72</option> 
            <option value="73">73</option> 
            <option value="74">74</option> 
            <option value="75">75</option> 
            <option value="76">76</option> 
            <option value="77">77</option> 
            <option value="78">78</option> 
            <option value="79">79</option> 
            <option value="80">80</option> 
            <option value="81">81</option> 
            <option value="82">82</option> 
            <option value="83">83</option> 
            <option value="84">84</option> 
            <option value="85">85</option> 
            <option value="86">86</option> 
            <option value="87">87</option> 
            <option value="88">88</option> 
            <option value="89">89</option> 
            <option value="90">90</option> 
            <option value="91">91</option> 
            <option value="92">92</option> 
            <option value="93">93</option> 
            <option value="94">94</option> 
            <option value="95">95</option> 
            <option value="96">96</option> 
            <option value="97">97</option> 
            <option value="98">98</option> 
            <option value="99">99</option> 
            <option value="100">100</option> 
            <option value="101">101</option> 
            <option value="102">102</option> 
            <option value="103">103</option> 
            <option value="104">104</option> 
            <option value="105">105</option> 
            <option value="106">106</option> 
            <option value="107">107</option> 
            <option value="108">108</option> 
            <option value="109">109</option> 
            <option value="110">110</option> 
            <option value="111">111</option> 
            <option value="112">112</option> 
            <option value="113">113</option> 
            <option value="114">114</option> 
            <option value="115">115</option> 
            <option value="116">116</option> 
            <option value="117">117</option> 
            <option value="118">118</option> 
            <option value="119">119</option> 
            <option value="120">120</option> 
            <option value="121">121</option> 
            <option value="122">122</option> 
            <option value="123">123</option> 
            <option value="124">124</option> 
            <option value="125">125</option> 
            <option value="126">126</option> 
            <option value="127">127</option> 
            <option value="128">128</option> 
            <option value="129">129</option> 
            <option value="130">130</option> 
            <option value="131">131</option> 
            <option value="132">132</option> 
            <option value="133">133</option> 
            <option value="134">134</option> 
            <option value="135">135</option> 
            <option value="136">136</option> 
            <option value="137">137</option> 
            <option value="138">138</option> 
            <option value="139">139</option> 
            <option value="140">140</option> 
            <option value="141">141</option> 
            <option value="142">142</option> 
            <option value="143">143</option> 
            <option value="144">144</option> 
            <option value="145">145</option> 
            <option value="146">146</option> 
            <option value="147">147</option> 
            <option value="148">148</option> 
            <option value="149">149</option> 
            <option value="150">150</option>  
        </select>
      </label>

  <label htmlFor="book">
         Select a book
         <select name="book" 
          onChange={event => handleSubmit(event)}
          form="book">
            <option value="GENESIS">Genesis</option>  
            <option value="EXODUS">Exodus</option>
            <option value="LEVITICUS">Leviticus</option>
            <option value="NUMBERS">Numbers</option>
            <option value="Deuteronomy">Deuteronomy</option>
            <option value="Joshua">Joshua</option>
            <option value="Judges">Judges</option>
            <option value="Ruth">Ruth</option>
            <option value="1 Samuel">1 Samuel (1 Kings)</option>
            <option value="2 Samuel">2 Samuel (2 Kings)</option>
            <option value="1 Kings">1 Kings (3 Kings)</option>
            <option value="2 Kings">2 Kings (4 Kings)</option>
            <option value="1 Chronicles">1 Chronicles</option>
            <option value="2 Chronicles">2 Chronicles</option>
            <option value="Ezra">Ezra</option>
            <option value="Nehemiah">Nehemiah</option>
            <option value="Esther">Esther</option>
            <option value="Job">Job</option>
            <option value="Psalms">Psalms</option>
            <option value="Proverbs">Proverbs</option>
            <option value="Ecclesiastes">Ecclesiastes</option>
            <option value="Song of Solomon">Song of Solomon</option>
            <option value="Isaiah">Isaiah</option>
            <option value="Jeremiah">Jeremiah</option>
            <option value="Lamentations">Lamentations</option>
            <option value="Ezekiel">Ezekiel</option>
            <option value="Daniel">Daniel</option>
            <option value="Hoseas">Hoseas</option>
            <option value="Joel">Joel</option>
            <option value="Amos">Amos</option>
            <option value="Obadiah">Obadiah</option>
            <option value="Jonah">Jonah</option>
            <option value="Micah">Micah</option>
            <option value="Nahum">Nahum</option>
            <option value="Habakkuk">Habakkuk</option>
            <option value="Zephaniah">Zephaniah</option>
            <option value="Haggai">Haggai</option>
            <option value="Zechariah">Zechariah</option>
            <option value="Malachi">Malachi</option>
        </select>
      </label>
   
       {forms.map(chapterinfo => {
         
         return <Chapter>
          
             <br></br>
             {processData().map((data2) => (
               <>
                 <p>{data2}</p>
               
                 </>
             ))}
         </Chapter>
       })} 
      </div>
    
    );
  }
  
  export default OldTestament;