package com.apirests2.Tienda.deportiva.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apirests2.Tienda.deportiva.models.Balon;
import com.apirests2.Tienda.deportiva.repositories.BalonRepository;

@RestController
@RequestMapping("/api/balones")
public class BalonController {

    @Autowired
private BalonRepository balonRepository;

@GetMapping
public List<Balon> obtenerTodosLosBalones(){
    return balonRepository.findAll();
}

@GetMapping("/{id}")
  public Balon obtenerBalonPorId(@PathVariable Long id) {
    return balonRepository.findById(id).orElse(null);
  }

  @PostMapping("/add/balon")
  public Balon crearBalon(@RequestBody Balon balon) {

    return balonRepository.save(balon);
  }

  @PutMapping("/update-balon/{id}")
  public Balon actualizarBalon(@PathVariable Long id, @RequestBody Balon balon) {
    balon.setId(id);
    return balonRepository.save(balon);

  }

  @DeleteMapping("/delete-balon/{id}")

    public void borrarBalon(@PathVariable Long id){
      balonRepository.deleteById(id);
    
  }

}
